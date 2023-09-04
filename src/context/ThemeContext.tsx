import { createContext, useState, useContext } from "react";

interface IThemeContext {
  isOpen: boolean;
  openCloseMenu: () => void;
  closeMenu: () => void;
}

const initialState = {
  isOpen: false,
  openCloseMenu: () => {},
  closeMenu: () => {},
};

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<IThemeContext>(initialState);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openCloseMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <ThemeContext.Provider
      value={{
        isOpen,
        openCloseMenu,
        closeMenu,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider;
