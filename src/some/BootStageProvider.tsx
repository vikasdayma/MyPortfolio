'use client'
import { createContext, useContext, useState, type ReactNode } from "react";

type Ctx = {
  stage: number;
  setStage: (n: number) => void;
  bootDone: boolean;
  setBootDone: (b: boolean) => void;
};

const BootStageContext = createContext<Ctx | null>(null);

export function BootStageProvider({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState(0);
  const [bootDone, setBootDone] = useState(false);
  return (
    <BootStageContext.Provider value={{ stage, setStage, bootDone, setBootDone }}>
      {children}
    </BootStageContext.Provider>
  );
}

export function useBootStage() {
  const ctx = useContext(BootStageContext);
  if (!ctx) throw new Error("useBootStage must be used within BootStageProvider");
  return ctx;
}

// Stage gates
export const STAGE = {
  NAV: 1,
  HEADLINE: 2,
  PORTRAIT: 3,
  BUTTONS: 4,
  CARDS: 5,
  STATS: 6,
  DONE: 7,
} as const;

export function reached(current: number, gate: number) {
  return current >= gate;
}