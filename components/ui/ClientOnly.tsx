'use client';

import { useEffect, useState, ReactNode } from 'react';

/**
 * ClientOnly component - prevents hydration mismatches
 * by only rendering children on the client side
 */
export const ClientOnly = ({ children }: { children: ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

