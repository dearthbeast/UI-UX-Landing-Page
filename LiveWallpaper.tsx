import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  connections: number[];
}

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  speed: number;
  currentPath: number;
  progress: number;
  hue: number;
}

export function LiveWallpaper() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initialize nodes (connection points)
    const initializeNodes = () => {
      const nodes: Node[] = [];
      const nodeCount = Math.floor((canvas.width * canvas.height) / 50000); // Adaptive node count
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: []
        });
      }

      // Create connections between nearby nodes
      nodes.forEach((node, index) => {
        const maxConnections = 3;
        let connectionCount = 0;
        
        nodes.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex && connectionCount < maxConnections) {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            );
            
            if (distance < 200 && Math.random() < 0.4) {
              node.connections.push(otherIndex);
              connectionCount++;
            }
          }
        });
      });

      nodesRef.current = nodes;
    };

    // Initialize particles (flowing markers)
    const initializeParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(15, Math.floor(nodesRef.current.length / 3));
      
      for (let i = 0; i < particleCount; i++) {
        const startNodeIndex = Math.floor(Math.random() * nodesRef.current.length);
        const startNode = nodesRef.current[startNodeIndex];
        
        if (startNode && startNode.connections.length > 0) {
          particles.push({
            x: startNode.x,
            y: startNode.y,
            targetX: startNode.x,
            targetY: startNode.y,
            speed: 0.5 + Math.random() * 1,
            currentPath: startNodeIndex,
            progress: 0,
            hue: Math.random() * 60 + 200 // Blue to purple range
          });
        }
      }
      
      particlesRef.current = particles;
    };

    // Draw connections
    const drawConnections = () => {
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
      ctx.lineWidth = 1;
      
      nodesRef.current.forEach((node, index) => {
        node.connections.forEach(connectionIndex => {
          const targetNode = nodesRef.current[connectionIndex];
          if (targetNode) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            ctx.stroke();
          }
        });
      });
    };

    // Draw nodes
    const drawNodes = () => {
      nodesRef.current.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.3)';
        ctx.fill();
      });
    };

    // Update and draw particles
    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        const currentNode = nodesRef.current[particle.currentPath];
        
        if (!currentNode || currentNode.connections.length === 0) {
          // Find a new starting node
          const newStartIndex = Math.floor(Math.random() * nodesRef.current.length);
          const newStartNode = nodesRef.current[newStartIndex];
          if (newStartNode && newStartNode.connections.length > 0) {
            particle.currentPath = newStartIndex;
            particle.x = newStartNode.x;
            particle.y = newStartNode.y;
            particle.progress = 0;
          }
          return;
        }

        // Move towards target
        if (particle.progress >= 1) {
          // Choose next target
          const nextNodeIndex = currentNode.connections[
            Math.floor(Math.random() * currentNode.connections.length)
          ];
          const nextNode = nodesRef.current[nextNodeIndex];
          
          if (nextNode) {
            particle.currentPath = nextNodeIndex;
            particle.progress = 0;
            particle.x = currentNode.x;
            particle.y = currentNode.y;
            particle.targetX = nextNode.x;
            particle.targetY = nextNode.y;
          }
        } else {
          // Interpolate position
          const targetNode = nodesRef.current[currentNode.connections[0]] || currentNode;
          particle.targetX = targetNode.x;
          particle.targetY = targetNode.y;
          
          particle.progress += particle.speed * 0.01;
          particle.x += (particle.targetX - particle.x) * particle.progress;
          particle.y += (particle.targetY - particle.y) * particle.progress;
        }

        // Draw particle with glow effect
        const glowSize = 8 + Math.sin(Date.now() * 0.005 + particle.hue) * 2;
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 60%, 0.8)`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 80%, 60%, 0.4)`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 80%, 60%, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Inner core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 90%, 70%, 1)`;
        ctx.fill();

        // Trail effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 80%, 0.6)`;
        ctx.fill();
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawConnections();
      drawNodes();
      updateParticles();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initializeNodes();
    initializeParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: -2,
        background: 'transparent'
      }}
    />
  );
}