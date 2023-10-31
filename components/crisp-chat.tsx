"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("06f4cdde-d6e5-466b-8cf2-1a81e768fa93");
  }, []);

  return null;
};
