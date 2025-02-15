"use client";

import { useEffect } from "react";

export default function useMetricoolTracker() {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://tracker.metricool.com/resources/be.js";
      script.onload = () => {
        if (window.beTracker) {
          window.beTracker.t({ hash: "d0667b9f27f879a0fe6329fd48778698" });
        }
      };
      document.head.appendChild(script);
    };

    loadScript();
  }, []);
};


