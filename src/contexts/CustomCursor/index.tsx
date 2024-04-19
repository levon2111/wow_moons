import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CustomCursorContext from './context/CustomCursorContext';

const CustomCursor = () => {
  const { type } = useContext(CustomCursorContext);
  const secondaryCursor = useRef<HTMLDivElement>(null);
  const mainCursor = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX = mouseX - (secondaryCursor.current as HTMLDivElement).clientWidth / 2;
      positionRef.current.mouseY = mouseY - (secondaryCursor.current as HTMLDivElement).clientHeight / 2;
      (mainCursor.current as HTMLDivElement).style.transform = `translate3d(${
        mouseX - (mainCursor.current as HTMLDivElement).clientWidth / 2
      }px, ${mouseY - (mainCursor.current as HTMLDivElement).clientHeight / 2}px, 0)`;
    });

    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      (secondaryCursor.current as HTMLDivElement).style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);
  return (
    <CursorWrapper className={`cursor-wrapper ${type}`}>
      <div className="main-cursor " ref={mainCursor}>
        <div className="main-cursor-background"></div>
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background"></div>
      </div>
    </CursorWrapper>
  );
};

const CursorWrapper = styled.div`
  .main-cursor,
  .secondary-cursor {
    z-index: 10000;

    pointer-events: none;
    // overflow: hidden;
    transform: translate3d(0, 0, 0);
    position: fixed;
  }

  .main-cursor {
    transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
    animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    mix-blend-mode: difference;

    .main-cursor-background {
      width: 30px;
      height: 30px;
      background: white;
      border-radius: 50%;
    }
  }

  .secondary-cursor {
    width: 60px;
    height: 60px;

    .cursor-background {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid black;
      position: relative;
      &:after,
      &:before {
        content: '';
        width: 8px;
        height: 8px;
        background: black;
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        animation: fadeOut 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
      }
      &:before {
        left: 10px;
        clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
      }

      &:after {
        right: 10px;
        clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
      }
    }
  }

  &.slider-drag {
    .cursor-background {
      animation: scaleUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards, bgUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;

      &:after {
        animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards, translateRightDot 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
      }

      &:before {
        animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards, translateLeftDot 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
      }
    }

    .main-cursor {
      animation: fadeOut 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }
  }
  &.slider-drag-vertical {
    .cursor-background {
      animation: scaleUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards, bgUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards, rotate 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
      
      &:after {
        animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards, translateRightDot 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
      }

      &:before {
        animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards, translateLeftDot 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
      }
    }

    .main-cursor {
      animation: fadeOut 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }
  }

  &.menu {
    .cursor-background {
      animation: fadeOut 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }

    .main-cursor-background {
      animation: scaleUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }
  }
  &.link {
    .cursor-background {
      animation: fadeOut 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }

    .main-cursor-background {
      animation: scaleUp 0.5s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards infinite alternate;
    }
  }
  &.link-primary {
    .main-cursor {
      mix-blend-mode: overlay;
    }
    .cursor-background {
      animation: fadeOut 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }

    .main-cursor-background {
      animation: scaleUp 0.5s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards infinite alternate;
    }
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    } 
    100% {
      transform: rotate(90deg);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes bgUp {
    from {
      background-color: transparent;
    }

    to {
      background-color: rgba(255, 255, 255, .7);
    }
  }

  @keyframes bgDown {
    from {
      background-color: white;
    }

    to {
      background-color: transparent;
    }
  }

  @keyframes scaleUp {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.5);
    }
  }

  @keyframes scaleDown {
    from {
      transform: scale(1.5);
    }

    to {
      transform: scale(1);
    }
  }

  @keyframes translateLeftDot {
    from {
      transform: translate(20px, -50%);
    }

    to {
      transform: translate(0px, -50%);
    }
  }

  @keyframes translateRightDot {
    from {
      transform: translate(-20px, -50%);
    }

    to {
      transform: translate(0px, -50%);
    }
  }
`;

export default CustomCursor;
