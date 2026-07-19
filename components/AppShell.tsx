"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { BootStageProvider } from "@/src/some/BootStageProvider";
import { Terminal } from "@/src/some/Terminal";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <BootStageProvider>
        <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
          <main>
            <div className="mx-auto max-w-7xl px-6 pb-32" />
          </main>
          <Terminal />
        </div>
      </BootStageProvider>
    );
  }

  return (
    <>
      <Sidebar />
      <main className="flex-1 min-w-0">{children}</main>
    </>
  );
}