import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ScrollAnimateWrapperProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}

const ScrollAnimateWrapper = ({
  children,
  className,
  direction = "up",
  delay = 0,
}: ScrollAnimateWrapperProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const animationClass = {
    up: "scroll-animate",
    left: "scroll-animate-left",
    right: "scroll-animate-right",
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(animationClass, isVisible && "visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimateWrapper;
