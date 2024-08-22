import React, { useRef, useState } from 'react';

const ScrollComponent = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const button1Ref = useRef(null);
    const button2Ref = useRef(null);
    const button3Ref = useRef(null);

    const scrollToSection = (sectionRef, buttonRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });

        if (button1Ref.current) button1Ref.current.style.backgroundColor = button1Ref === buttonRef ? 'green' : 'blue';
        if (button2Ref.current) button2Ref.current.style.backgroundColor = button2Ref === buttonRef ? 'green' : 'blue';
        if (button3Ref.current) button3Ref.current.style.backgroundColor = button3Ref === buttonRef ? 'green' : 'blue';
    };

    return (
        <div>
            <button
                onClick={() => scrollToSection(section1Ref, button1Ref)}
                ref={button1Ref}
                style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    margin: '5px'
                }}
            >
                Scroll to Section 1
            </button>

            <button
                onClick={() => scrollToSection(section2Ref, button2Ref)}
                ref={button2Ref}
                style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    margin: '5px'
                }}
            >
                Scroll to Section 2
            </button>

            <button
                onClick={() => scrollToSection(section3Ref, button3Ref)}
                ref={button3Ref}
                style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    margin: '5px'
                }}
            >
                Scroll to Section 3
            </button>

            <div style={{ height: '100vh', backgroundColor: 'lightblue' }}>
                Scroll down to see the target sections
            </div>

            <div ref={section1Ref} style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
                Section 1
            </div>
            <div ref={section2Ref} style={{ height: '100vh', backgroundColor: 'lightcoral' }}>
                Section 2
            </div>
            <div ref={section3Ref} style={{ height: '100vh', backgroundColor: 'lightgoldenrodyellow' }}>
                Section 3
            </div>
        </div>
    );
};

export default ScrollComponent;
