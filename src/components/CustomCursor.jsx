import { useEffect, useRef } from "react";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    window.addEventListener("mousemove", moveMouse);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <>
      {/* Dot */}

      <div
        ref={dotRef}
        className="fixed w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[99999]"
        style={{
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 25px rgba(34,211,238,.8)",
        }}
      />

      {/* Ring */}

      <div
        ref={ringRef}
        className="fixed w-10 h-10 border border-cyan-400 rounded-full pointer-events-none z-[99998]"
        style={{
          transform: "translate(-50%, -50%)",
          transition: "border .25s ease",
        }}
      />
    </>
  );
}

export default CustomCursor;