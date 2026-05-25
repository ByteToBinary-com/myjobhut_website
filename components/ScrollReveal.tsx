"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const frame = window.requestAnimationFrame(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

      if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => element.setAttribute("data-reveal-visible", "true"));
        return;
      }

      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-reveal-visible", "true");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.12
        }
      );
      observer = revealObserver;

      elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
          element.setAttribute("data-reveal-visible", "true");
          return;
        }

        revealObserver.observe(element);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
