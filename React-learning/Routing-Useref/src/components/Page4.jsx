import React, { useRef, useEffect } from 'react';

const ScrollComponent = () => {
  // Step 1: Create refs for the elements you want to scroll to
  const sectionRef = useRef(null);

  // Step 3: Create a function to scroll to the element
  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={scrollToSection}>Scroll to Section</button>

      <div style={{ height: '100vh', backgroundColor: 'lightblue' }}>
        Scroll down to see the target section
      </div>

      {/* Step 2: Attach the ref to the element */}
      <div ref={sectionRef} style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
        Target Section
      </div>
    </div>
  );
};

export default ScrollComponent;
