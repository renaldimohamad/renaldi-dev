"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  triggerOnce?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  triggerOnce = true,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // If triggerOnce is true, we stop observing after the first reveal
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          // Only toggle back to false if triggerOnce is explicitly disabled
          setIsVisible(false);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [triggerOnce]);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
      className={`
        transition-all 
        duration-[600ms] 
        ease-[cubic-bezier(0.16, 1, 0.3, 1)]
        will-change-[opacity,transform,filter]
        ${isVisible
          ? "opacity-100 translate-y-0 blur-0 scale-100"
          : "opacity-0 translate-y-8 blur-[2px] scale-[0.99]"
        }
      `}
    >
      {children}
    </div>
  );
}
