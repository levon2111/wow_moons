import { useLayoutEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

function useWindowDimensions(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0
  });

  useLayoutEffect(() => {
    const handler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    handler();

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return windowSize;
}

export default useWindowDimensions;
