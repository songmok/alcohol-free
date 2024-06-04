import { useCallback, useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalOpen = useCallback(() => {
    setIsOpen(() => true);
  }, []);

  const modalClose = useCallback(() => {
    setIsOpen(() => false);
  }, []);

  return {
    modalOpen,
    modalClose,
    isOpen,
  };
};

export default useModal;
