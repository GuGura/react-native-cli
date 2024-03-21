import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';

export default function QueryProvider({children}: {children: any}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
