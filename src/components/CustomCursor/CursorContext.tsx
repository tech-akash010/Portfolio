import React, { createContext, useContext, useState, ReactNode } from 'react';

export type CursorType = 'default' | 'hover' | 'project' | 'external' | 'drag' | 'text' | 'hidden';

interface CursorContextType {
  cursorType: CursorType;
  cursorText: string;
  setCursorType: (type: CursorType, text?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cursorType, setType] = useState<CursorType>('default');
  const [cursorText, setText] = useState<string>('');

  const setCursorType = (type: CursorType, text: string = '') => {
    setType(type);
    setText(text);
  };

  const resetCursor = () => {
    setType('default');
    setText('');
  };

  return (
    <CursorContext.Provider value={{ cursorType, cursorText, setCursorType, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = (): CursorContextType => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
