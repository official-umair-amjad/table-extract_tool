import { create } from 'zustand'

export const useUploadStore = create((set) => ({
  items: [],
  
  addFiles: (files) => {
    const newItems = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      status: 'queued',
    }))
    
    set((state) => ({
      items: [...state.items, ...newItems]
    }))
  },
  
  updateItem: (id, updates) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      )
    }))
  },
  
  removeItem: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id)
    }))
  },
  
  clearAll: () => {
    set({ items: [] })
  },
}))
