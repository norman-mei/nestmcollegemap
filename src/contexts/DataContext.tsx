'use client';

import React, { createContext, useContext, useState, useMemo } from 'react';
import rawData from '@/data/students.json';
import { parseRawData } from '@/lib/utils';
import { ProcessedStudent, RawStudent } from '@/lib/types';

interface DataContextType {
  allStudents: ProcessedStudent[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const allStudents = useMemo(() => {
    return parseRawData(rawData as RawStudent[]);
  }, []);

  return (
    <DataContext.Provider value={{ allStudents }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within a DataProvider');
  return context;
};
