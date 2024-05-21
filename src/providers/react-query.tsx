"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

export function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const [client] = useState(new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
