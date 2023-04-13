import { render, RenderResult } from "@testing-library/react";
import React from "react";
import { QueryClientProvider } from "react-query";
import useDefaultQueryClient from "../Api/hooks/useDefaultQueryClient";

export function testRender(component: React.ReactNode): RenderResult {
  const queryClient = useDefaultQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
  );
}
