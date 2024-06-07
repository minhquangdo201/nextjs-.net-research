"use client"
import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
} from "react";

const ActiveContext = createContext({
  active: [false],
  handleItemClick: (index: number) => {},
}); // Provide a default value

export const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState([false]); // Initial state

  const handleItemClick = (index: number) => {
    setActive(active.map((isActive, i) => (i === index ? true : false)));
  };

  return (
    <ActiveContext.Provider value={{ active, handleItemClick }}>
      {children}
    </ActiveContext.Provider>
  );
};

export const useActiveContext = () => useContext(ActiveContext);
