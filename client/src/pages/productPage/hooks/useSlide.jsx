import { useEffect, useMemo, useRef, useState } from "react";

const useSlide = (images) => {
  const imgs = useMemo(() => {
    if (!images || images.length === 0) return [];

    return [images[images.length - 1], ...images, images[0]];
  }, [images]);

  const [slideIndex, setSlideIndex] = useState(1);
  const [animate, setAnimate] = useState(true);

  const nextSlide = () => {
    setAnimate(true);
    setSlideIndex((prev) => prev + 1);
  };
  const prevSlide = () => {
    setAnimate(true);
    setSlideIndex((prev) => prev - 1);
  };

  const slideRef = useRef(null);

  const startX = useRef(0);
  const isDragging = useRef();

  useEffect(() => {
    const slider = slideRef.current;

    if (!slider) return;

    const onEnd = () => {
      if (slideIndex === imgs.length - 1) {
        setSlideIndex(1);
        setAnimate(false);
      }

      if (slideIndex === 0) {
        setSlideIndex(imgs.length - 2);
        setAnimate(false);
      }
    };

    slider.addEventListener("transitionend", onEnd);
    return () => slider.removeEventListener("transitionend", onEnd);
  });

  const realIndex =
    slideIndex === imgs.length - 1
      ? 1
      : slideIndex === 0
        ? imgs.length - 2
        : slideIndex;

  const handleStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;

    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = startX.current - currentX;

    if (diff > 50) {
      nextSlide();
      isDragging.current = false;
    } else if (diff < -50) {
      prevSlide();
      isDragging.current = false;
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
  };
  return {
    slideIndex,
    animate,
    realIndex,
    slideRef,
    imgs,
    nextSlide,
    prevSlide,
    handleStart,
    handleMove,
    handleEnd
  }
}

export default useSlide