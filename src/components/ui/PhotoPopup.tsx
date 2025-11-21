'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { PopupAnchorRect, useUI } from '@/contexts/UIContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useFilters } from '@/contexts/FilterContext';
import { GRAD_CLASS_COLORS } from '@/lib/constants';

export default function PhotoPopup() {
  const { selectedStudent, isPhotoPopupOpen, closePhotoPopup, openPhotoPopup, popupAnchorRect } = useUI();
  const { filteredStudents } = useFilters();
  const [isZoomed, setIsZoomed] = useState(false);
  const wasOpenRef = useRef(false);

  const captionText = useMemo(() => {
    if (!selectedStudent) return '';
    return selectedStudent.bioCaption && selectedStudent.bioCaption.trim().length > 0
      ? selectedStudent.bioCaption
      : `Congrats to ${selectedStudent.seniorName} on committing to ${selectedStudent.collegeName}!`;
  }, [selectedStudent]);

  // Reset zoom when the popup is first opened or closed
  useEffect(() => {
    if (isPhotoPopupOpen && !wasOpenRef.current) {
      setIsZoomed(false);
    }
    if (!isPhotoPopupOpen) {
      setIsZoomed(false);
    }
    wasOpenRef.current = isPhotoPopupOpen;
  }, [isPhotoPopupOpen]);

  // Close on Escape (mirrors vanilla zoom popup behavior)
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isPhotoPopupOpen) {
        e.preventDefault();
        setIsZoomed(false);
        closePhotoPopup();
      }
    };
    if (isPhotoPopupOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isPhotoPopupOpen, closePhotoPopup]);

  const handleNext = (e?: React.MouseEvent | KeyboardEvent) => {
    e?.stopPropagation?.();
    if (!selectedStudent || filteredStudents.length === 0) return;

    const currentIndex = filteredStudents.findIndex((s) => s.id === selectedStudent.id);
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % filteredStudents.length;

    openPhotoPopup(filteredStudents[nextIndex]);
    setIsZoomed(true);
  };

  const handlePrev = (e?: React.MouseEvent | KeyboardEvent) => {
    e?.stopPropagation?.();
    if (!selectedStudent || filteredStudents.length === 0) return;

    const currentIndex = filteredStudents.findIndex((s) => s.id === selectedStudent.id);
    const prevIndex =
      currentIndex === -1
        ? filteredStudents.length - 1
        : (currentIndex - 1 + filteredStudents.length) % filteredStudents.length;

    openPhotoPopup(filteredStudents[prevIndex]);
    setIsZoomed(true);
  };

  // Arrow key navigation only while zoomed (matches original behavior)
  useEffect(() => {
    const handleArrow = (e: KeyboardEvent) => {
      if (!isPhotoPopupOpen || !isZoomed) return;
      if (e.key === 'ArrowRight') {
        handleNext(e);
        e.preventDefault();
      } else if (e.key === 'ArrowLeft') {
        handlePrev(e);
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleArrow);
    return () => window.removeEventListener('keydown', handleArrow);
  }, [isPhotoPopupOpen, isZoomed, filteredStudents, selectedStudent]);

  if (!isPhotoPopupOpen || !selectedStudent) return null;

  const gradColor = GRAD_CLASS_COLORS[selectedStudent.gradClass] || '#888';
  const HonoraryBadges = ({ size = 16 }: { size?: number } = {}) => {
    const h = selectedStudent.honoraries || [];
    if (h.length === 0) return null;
    const icons: Record<string, string> = {
      dean_scholars: '/logos/dean scholars.png',
      macaulay: '/logos/macaulay.png',
      posse: '/logos/posse.png',
      questbridge: '/logos/questbridge.png',
    };
    return (
      <div className="flex items-center gap-1">
        {h.map((key) =>
          icons[key] ? (
            <img
              key={key}
              src={icons[key]}
              alt={key}
              className="h-4 w-4"
              style={{ height: size, width: key === 'posse' ? size * 1.3 : size }}
            />
          ) : null
        )}
      </div>
    );
  };

  const SocialLinks = (
    <div className="flex flex-wrap justify-center gap-2 items-center">
      <HonoraryBadges size={28} />
      {selectedStudent.instagramUrl && (
        <a
          href={selectedStudent.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img src="/logos/instagram.svg" alt="Instagram" className="h-7 w-7" />
        </a>
      )}
      {selectedStudent.linkedInUrl && (
        <a
          href={selectedStudent.linkedInUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img src="/logos/linkedin.svg" alt="LinkedIn" className="h-7 w-7" />
        </a>
      )}
      {selectedStudent.githubUrl && (
        <a
          href={selectedStudent.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <img src="/logos/github.svg" alt="GitHub" className="h-7 w-7 dark:invert" />
        </a>
      )}
    </div>
  );

  const closeAll = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsZoomed(false);
    closePhotoPopup();
  };

  const computePreviewPosition = (anchor?: PopupAnchorRect | null) => {
    if (typeof window === 'undefined') return { top: 24, left: 24, width: 320, maxHeight: 600 };
    const viewportMargin = 12;
    const gapFromList = 16;
    const preferredWidth = 320;
    const maxLeft = window.innerWidth - preferredWidth - viewportMargin;
    const maxHeight = Math.max(240, window.innerHeight - viewportMargin * 2);

    if (!anchor) {
      return { top: viewportMargin, left: Math.max(viewportMargin, maxLeft), width: preferredWidth, maxHeight };
    }

    let left = anchor.right + gapFromList; // keep a gap from the list scrollbar
    if (left > maxLeft) {
      // If pushing right would overflow, place it to the left of the list item
      left = anchor.left - preferredWidth - gapFromList;
    }
    left = Math.max(viewportMargin, Math.min(left, maxLeft));

    const maxTopAllowed = window.innerHeight - maxHeight - viewportMargin;
    let top = Math.min(anchor.top, Math.max(viewportMargin, maxTopAllowed));

    return { top, left, width: preferredWidth, maxHeight };
  };

  const previewPos = computePreviewPosition(popupAnchorRect);

  const FloatingPreview = (
    <div
      className="fixed z-[9999] rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden"
      style={{
        top: previewPos.top + 50, // larger nudge down for breathing room
        left: previewPos.left + 12,
        width: previewPos.width,
        maxWidth: '90vw',
        maxHeight: previewPos.maxHeight,
        overflowY: 'auto'
      }}
    >
      <div className="flex items-start justify-between px-4 py-3 border-b border-gray-200 dark:border-neutral-800">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{selectedStudent.seniorName}</div>
            <HonoraryBadges />
          </div>
          <button
            type="button"
            className="text-xs text-blue-600 dark:text-blue-300 font-semibold underline-offset-2 hover:underline"
            onClick={(e) => {
              e.stopPropagation();
              window.dispatchEvent(new CustomEvent('center-student-marker', { detail: { id: selectedStudent.id } }));
            }}
          >
            {selectedStudent.collegeName}
          </button>
          <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 flex-wrap">
            <span className="px-2 py-0.5 rounded-full text-white font-bold" style={{ backgroundColor: gradColor }}>
              Class of {selectedStudent.gradClass}
            </span>
            <span>{selectedStudent.major || 'Undecided'}</span>
          </div>
        </div>
        <button
          onClick={closeAll}
          className="p-1 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Close senior photo"
        >
          <X size={18} />
        </button>
      </div>

      <div className="relative bg-black">
        <img
          src={selectedStudent.seniorPhotoUrl}
          alt={selectedStudent.seniorName}
          className="w-full object-contain max-h-80 cursor-zoom-in"
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(true);
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = selectedStudent.seniorPhotoUrlPng || '/placeholder-logo.png';
          }}
        />
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          Click to zoom & browse
        </div>
      </div>

      <div className="px-4 py-3 space-y-3">
        <div className="text-sm text-gray-700 dark:text-gray-200 whitespace-pre-wrap max-h-32 overflow-y-auto leading-relaxed">
          {captionText}
        </div>
        <div className="pt-3 border-t border-gray-200 dark:border-neutral-800">{SocialLinks}</div>
      </div>
    </div>
  );

  const ZoomOverlay = (
    <div
      className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-sm flex items-center justify-center"
      onClick={closeAll}
    >
      {filteredStudents.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[10001] p-3 bg-black/80 text-white rounded-full hover:bg-black/90 transition-colors shadow-xl"
            aria-label="Previous senior"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[10001] p-3 bg-black/80 text-white rounded-full hover:bg-black/90 transition-colors shadow-xl"
            aria-label="Next senior"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      <button
        onClick={closeAll}
        className="absolute top-4 right-4 z-[10002] p-2 bg-black/70 text-white rounded-full hover:bg-red-500 transition-colors shadow-lg"
        aria-label="Close zoomed photo"
      >
        <X size={22} />
      </button>

      <div
        className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-6xl w-[min(1100px,95vw)] max-h-[90vh] px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 flex items-center justify-center max-h-[90vh] w-full">
          <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/50 px-2 py-1 rounded">
            <HonoraryBadges />
          </div>
          <img
            src={selectedStudent.seniorPhotoUrl}
            alt={selectedStudent.seniorName}
            className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl bg-black"
            onError={(e) => {
              (e.target as HTMLImageElement).src = selectedStudent.seniorPhotoUrlPng || '/placeholder-logo.png';
            }}
          />
        </div>

        <div className="w-full md:w-[420px] max-h-[90vh] overflow-y-auto rounded-xl bg-white/95 dark:bg-neutral-900/95 text-gray-900 dark:text-gray-50 shadow-2xl border border-gray-200/70 dark:border-neutral-700/70 p-6 space-y-3">
          <div className="text-center md:text-left space-y-1">
            <div className="text-2xl font-bold">{selectedStudent.seniorName}</div>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 text-sm">
              <span className="px-3 py-1 rounded-full text-white font-bold" style={{ backgroundColor: gradColor }}>
                Class of {selectedStudent.gradClass}
              </span>
              <HonoraryBadges />
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('center-student-marker', { detail: { id: selectedStudent.id } }));
                }}
                className="text-blue-600 dark:text-blue-300 font-semibold underline-offset-2 hover:underline"
              >
                {selectedStudent.collegeName}
              </button>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">{selectedStudent.major || 'Undecided'}</div>
            <div className="flex items-center gap-2"><HonoraryBadges size={18} /></div>
          </div>

          <div className="text-sm whitespace-pre-wrap leading-relaxed text-gray-800 dark:text-gray-200">
            {captionText}
          </div>

          <div className="pt-2 border-t border-gray-200 dark:border-neutral-800">{SocialLinks}</div>

          <div className="text-xs text-gray-500 dark:text-gray-400 text-center border-t border-gray-200 dark:border-neutral-800 pt-3">
            Use ←/→ to browse seniors. Click outside the photo or press Esc to exit zoom.
          </div>
        </div>
      </div>
    </div>
  );

  // Floating preview mirrors the small popup; zoom overlay mirrors the zoomed view.
  if (!isZoomed) {
    return typeof document !== 'undefined' ? createPortal(FloatingPreview, document.body) : null;
  }

  return typeof document !== 'undefined' ? createPortal(ZoomOverlay, document.body) : null;
}
