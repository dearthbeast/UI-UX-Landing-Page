import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    let movementTimer: NodeJS.Timeout;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Clear previous timer
      clearTimeout(movementTimer);
      
      // Set timer to mark as not moving after 1 second of no movement
      movementTimer = setTimeout(() => {
        setIsMoving(false);
      }, 1000);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      clearTimeout(movementTimer);
    };
  }, []);

  // Determine cursor emoji based on state
  const getCursorEmoji = () => {
    if (isClicking) {
      return '😄'; // Very happy when clicking
    } else if (isMoving) {
      return '😊'; // Happy when moving
    } else {
      return '😔'; // Sad when not moving
    }
  };

  const getCursorClasses = () => {
    let classes = 'custom-cursor';
    
    if (isClicking) {
      classes += ' cursor-clicking';
    } else if (isMoving) {
      classes += ' cursor-happy';
    } else {
      classes += ' cursor-sad';
    }
    
    return classes;
  };

  return (
    <div
      className={getCursorClasses()}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {getCursorEmoji()}
    </div>
  );
}