import React, {useState, useEffect, useRef} from 'react';
import DOTS from 'vanta/dist/vanta.dots.min';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default function VantaComponent() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: myRef.current,
          mouseControls: true,
          showLines: false,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={myRef} className="fixed inset-0 -z-10"></div>;
}
