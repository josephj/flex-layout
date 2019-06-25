import { useEffect } from "react";

/**
 * Since iOS Safari has started to ignore user-scalable=false since 10.0,
 * I need to use the following hack to disable this user behaviour instead.
 */
export default function useDisableScalingEffect() {
  return useEffect(() => {
    const handleTouchStart = e => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    let lastTouchEnd = 0;
    const handleTouchEnd = e => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    // Need to use `passive: true` or the .preventDefault doesn't work
    document.addEventListener("touchstart", handleTouchStart, {
      passive: false
    });
    document.addEventListener("touchend", handleTouchEnd, false);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
}
