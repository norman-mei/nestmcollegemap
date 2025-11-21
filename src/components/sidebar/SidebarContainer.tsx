'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function SidebarContainer({ children }: { children: React.ReactNode }) {
  const [width, setWidth] = useState<number>(400);
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const startResizing = React.useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback((mouseMoveEvent: MouseEvent) => {
    if (isResizing) {
      const newWidth = mouseMoveEvent.clientX;
      if (newWidth > 300 && newWidth < 800) {
          setWidth(newWidth);
          if (typeof window !== 'undefined') {
            window.localStorage.setItem('sidebar-width', String(newWidth));
          }
      }
    }
  }, [isResizing]);

  useEffect(() => {
    // apply stored width after mount to avoid SSR mismatch
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('sidebar-width');
      const parsed = stored ? parseInt(stored, 10) : NaN;
      if (parsed && parsed > 300 && parsed < 800) {
        setWidth(parsed);
      }
    }

    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className="flex h-full relative z-20 shadow-xl" style={{ width: width }}>
      <div 
        ref={sidebarRef}
        className="flex-1 bg-gray-50 dark:bg-neutral-900 border-r border-gray-300 dark:border-neutral-800 h-full flex flex-col overflow-hidden"
      >
        {children}
      </div>
      <div
        className="w-1 bg-gray-300 dark:bg-neutral-800 hover:bg-blue-500 cursor-col-resize transition-colors"
        onMouseDown={startResizing}
      />
    </div>
  );
}
