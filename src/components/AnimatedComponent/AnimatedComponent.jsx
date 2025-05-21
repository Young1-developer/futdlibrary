import React, { useEffect, useRef } from 'react';
import './AnimationStyles.css'; // Optional, or add inline styles instead

const AnimatedComponent = ({ type = "appear", children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (el) {
      el.classList.add(`animate-${type}`);
    }
  }, [type]);

  return (
    <div ref={elementRef} className="animated-item">
      {children}
    </div>
  );
};

export default AnimatedComponent;
