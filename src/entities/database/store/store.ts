import { create } from 'zustand'

import { type DProperties } from '../model/properties'

interface DatabaseState {
  data: DProperties[]
  setData: (data: DProperties[]) => void
}

export const useDatabaseStore = create<DatabaseState>((set) => ({
  data: [],
  setData: (data) => set({ data }),
}))
