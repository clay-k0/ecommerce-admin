"use client";

import { Toaster } from "react-hot-toast";

export const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        success: {
          style: {
            background: "#37733a",
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "#993431",
            color: "#fff",
          },
        },
      }}
    />
  );
};
