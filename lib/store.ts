import { create } from 'zustand'
import { UploadItem } from './types'

interface UploadStore {
  items: UploadItem[]
  addFiles: (files: File[]) => void
  updateItem: (id: string, updates: Partial<UploadItem>) => void
  removeItem: (id: string) => void
  clearAll: () => void
}

export const useUploadStore = create<UploadStore>((set) => ({
  items: [],
  
  addFiles: (files: File[]) => {
    const newItems: UploadItem[] = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      status: 'queued' as const,
    }))
    
    set((state) => ({
      items: [...state.items, ...newItems]
    }))
  },
  
  updateItem: (id: string, updates: Partial<UploadItem>) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      )
    }))
  },
  
  removeItem: (id: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id)
    }))
  },
  
  clearAll: () => {
    set({ items: [] })
  },
}))
