import React, { ReactNode, useState } from 'react';

const PageIdContext = React.createContext<{
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

const PageIdProvider = ({ children }: { children: ReactNode }) => {
  const [id, setId] = useState<string>('');
  return (
    <PageIdContext.Provider value={{ id, setId }}>
      {children}
    </PageIdContext.Provider>
  );
};

export function usePageId() {
  const context = React.useContext(PageIdContext);
  if (!context) {
    throw new Error("'usePageId does't place correctly in the page Provider");
  }
  return context;
}

export default PageIdProvider;
