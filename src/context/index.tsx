// 根节点 App上的 Provider
import React, { ReactNode } from "react";
import { AuthProvider } from "./auth-provider/auth-context";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
