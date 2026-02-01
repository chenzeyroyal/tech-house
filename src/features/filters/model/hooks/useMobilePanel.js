import { useState, useEffect } from "react";

export const useMobilePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("is-lock");
    } else {
      document.body.classList.remove("is-lock");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isOpen,
    setIsOpen,
  };
};
