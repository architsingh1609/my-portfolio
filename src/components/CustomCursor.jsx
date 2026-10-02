import { useEffect, useRef } from "react";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    /*
     * Custom cursor only runs when:
     * - Device has a precise pointer
     * - User has not requested reduced motion
     */

    if (!finePointer.matches || reducedMotion.matches) {
      return undefined;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let animationFrame = null;
    let isActive = true;
    let hasMoved = false;

    /* =========================================================
       CURSOR POSITION
    ========================================================= */

    const setCursorPosition = (element, x, y) => {
      if (!element) {
        return;
      }

      element.style.transform = `
        translate3d(${x}px, ${y}px, 0)
        translate(-50%, -50%)
      `;
    };

    /* =========================================================
       MOUSE MOVE
    ========================================================= */

    const moveMouse = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      hasMoved = true;

      if (dotRef.current) {
        setCursorPosition(
          dotRef.current,
          mouseX,
          mouseY
        );

        dotRef.current.style.opacity = "1";
      }

      if (ringRef.current) {
        ringRef.current.style.opacity = "1";
      }
    };

    /* =========================================================
       MOUSE LEAVE
    ========================================================= */

    const handleMouseLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = "0";
      }

      if (ringRef.current) {
        ringRef.current.style.opacity = "0";
      }
    };

    /* =========================================================
       MOUSE ENTER
    ========================================================= */

    const handleMouseEnter = () => {
      if (!hasMoved) {
        return;
      }

      if (dotRef.current) {
        dotRef.current.style.opacity = "1";
      }

      if (ringRef.current) {
        ringRef.current.style.opacity = "1";
      }
    };

    /* =========================================================
       INTERACTIVE ELEMENT ENTER
    ========================================================= */

    const handleInteractiveEnter = () => {
      if (!ringRef.current) {
        return;
      }

      ringRef.current.style.width = "46px";
      ringRef.current.style.height = "46px";
      ringRef.current.style.borderColor =
        "var(--accent)";
      ringRef.current.style.opacity = "0.9";
    };

    /* =========================================================
       INTERACTIVE ELEMENT LEAVE
    ========================================================= */

    const handleInteractiveLeave = () => {
      if (!ringRef.current) {
        return;
      }

      ringRef.current.style.width = "40px";
      ringRef.current.style.height = "40px";
      ringRef.current.style.borderColor =
        "var(--border-medium, currentColor)";
      ringRef.current.style.opacity = "1";
    };

    /* =========================================================
       ADD INTERACTIVE LISTENERS
    ========================================================= */

    const addInteractiveListeners = () => {
      const interactiveElements =
        document.querySelectorAll(
          "a, button, input, textarea, select, [role='button']"
        );

      interactiveElements.forEach((element) => {
        element.addEventListener(
          "mouseenter",
          handleInteractiveEnter
        );

        element.addEventListener(
          "mouseleave",
          handleInteractiveLeave
        );
      });

      return interactiveElements;
    };

    /* =========================================================
       CURSOR ANIMATION
    ========================================================= */

    const animate = () => {
      if (!isActive) {
        return;
      }

      ringX +=
        (mouseX - ringX) * 0.18;

      ringY +=
        (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        setCursorPosition(
          ringRef.current,
          ringX,
          ringY
        );
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    /* =========================================================
       INITIALIZE
    ========================================================= */

    const interactiveElements =
      addInteractiveListeners();

    window.addEventListener(
      "mousemove",
      moveMouse
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    window.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    animationFrame =
      requestAnimationFrame(animate);

    /* =========================================================
       CLEANUP
    ========================================================= */

    return () => {
      isActive = false;

      window.removeEventListener(
        "mousemove",
        moveMouse
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      interactiveElements.forEach((element) => {
        element.removeEventListener(
          "mouseenter",
          handleInteractiveEnter
        );

        element.removeEventListener(
          "mouseleave",
          handleInteractiveLeave
        );
      });

      if (animationFrame !== null) {
        cancelAnimationFrame(
          animationFrame
        );
      }
    };
  }, []);

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      {/* =====================================================
          CUSTOM CURSOR DOT
      ====================================================== */}

      <div
        ref={dotRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[99999]
          h-2.5
          w-2.5
          rounded-full
          bg-[var(--accent)]
          opacity-0
          transition-opacity
          duration-150
        "
        style={{
          boxShadow:
            "0 2px 10px rgba(37, 99, 235, 0.22)",
          willChange:
            "transform, opacity",
        }}
      />

      {/* =====================================================
          CUSTOM CURSOR RING
      ====================================================== */}

      <div
        ref={ringRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[99998]
          h-10
          w-10
          rounded-full
          border
          border-[var(--border-medium)]
          opacity-0
          transition-[width,height,border-color,opacity]
          duration-200
          ease-out
        "
        style={{
          willChange:
            "transform, width, height, border-color, opacity",
        }}
      />
    </>
  );
}

/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default CustomCursor;