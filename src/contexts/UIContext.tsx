'use client';

import React, { createContext, useContext, useState } from 'react';
import { ProcessedStudent } from '@/lib/types';

export interface PopupAnchorRect {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

interface UIContextType {
  selectedStudent: ProcessedStudent | null;
  setSelectedStudent: (student: ProcessedStudent | null) => void;
  isPhotoPopupOpen: boolean;
  openPhotoPopup: (student: ProcessedStudent, anchorRect?: PopupAnchorRect | null) => void;
  closePhotoPopup: () => void;
  activeHoverId: number | null;
  setActiveHoverId: (id: number | null) => void;
  popupAnchorRect: PopupAnchorRect | null;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedStudent, setSelectedStudent] = useState<ProcessedStudent | null>(null);
  const [isPhotoPopupOpen, setIsPhotoPopupOpen] = useState(false);
  const [activeHoverId, setActiveHoverId] = useState<number | null>(null);
  const [popupAnchorRect, setPopupAnchorRect] = useState<PopupAnchorRect | null>(null);

  const openPhotoPopup = (student: ProcessedStudent, anchorRect?: PopupAnchorRect | null) => {
    setSelectedStudent(student);
    setPopupAnchorRect(anchorRect ?? null);
    setIsPhotoPopupOpen(true);
  };

  const closePhotoPopup = () => {
    setIsPhotoPopupOpen(false);
    // Don't clear selectedStudent immediately to avoid flicker
  };

  return (
    <UIContext.Provider value={{ 
        selectedStudent, 
        setSelectedStudent, 
        isPhotoPopupOpen, 
        openPhotoPopup, 
        closePhotoPopup,
        activeHoverId,
        setActiveHoverId,
        popupAnchorRect
    }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error('useUI must be used within a UIProvider');
  return context;
};
