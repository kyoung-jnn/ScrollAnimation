import { useRef, useEffect, useCallback } from 'react';

const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {
  // 특정 위치에 Animation 트리거를 DOM에 지정
  const element = useRef<HTMLLIElement | HTMLDivElement>(null);
  let observer: IntersectionObserver;

  const handleDirection = (name: string) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return false;
    }
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = element;

      if (entry.isIntersecting && current) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = '1';
        current.style.transform = 'translate3d(0, 0, 0)';
      }
    },
    [element],
  );

  // 옵저버 등록
  // ㄴ사용자의 Viewport에 보일 때 작동
  useEffect(() => {
    if (element.current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 }); // 70% 보이면 콜백함수 작동
      observer.observe(element.current);
    }

    return () => observer.disconnect();
  }, [handleScroll]);

  return {
    ref: element,
    /* 초기 스타일
    사용자가 원하는 방향에 숨겨둔다 */
    style: {
      opacity: '0',
      transform: handleDirection(direction),
    },
  };
};

export default useScrollFadeIn;
