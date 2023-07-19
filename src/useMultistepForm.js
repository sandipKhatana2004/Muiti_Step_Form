import { useState } from "react";

export function useMultistepForm(steps) {
  const [currentStepIndex, setCurrentstepIndex] = useState(0);

  function next() {
    setCurrentstepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }
  function back() {
    setCurrentstepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    next,
    back,
    steps,
  };
}
