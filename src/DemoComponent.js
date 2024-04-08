import React, { useEffect, useState } from 'react';

const DemoComponent = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const getStyles = () => {
    if (screenSize < 768) {
      return { minWidth: '320px', height: '530px' };
    } else if (screenSize < 1024) {
      return { minWidth: '768px', height: '630px' };
    } else {
      return { minWidth: '1024px', height: '530px' };
    }
  };

  return (
    <div className="text-center mt-8">
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <div
        id="schedule"
        className="calendly-inline-widget"
        data-url="https://calendly.com/23xyz921/meeting"
        style={getStyles()}
      />
    </div>
  );
};

export default DemoComponent;



