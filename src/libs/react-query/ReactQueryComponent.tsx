// React Hooks 사용은 클라이언트컴포넌트에서만 사용 가능
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const ReactQueryComponent = ({ children }: IProps) => {
  const [client] = React.useState(
    new QueryClient({
      // react-query 전역설정
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  );
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryComponent;
