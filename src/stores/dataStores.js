import { create } from "zustand";

const useDataStores = create(set => ({
    chapters: [],
    setChapters: (res)=> set({chapters: res}),
    subChapters: [],
    setSubChapters: (res)=> set({subChapters: res}),
    materials: [],
    setMaterials: (res) => set({materials: res}),
    isLoading: false,
    setIsLoading: (res)=> set({isLoading: res}),
    userId: 0,
    setUserId: (res)=> set({userId: res}),
    currentIndex: 0,
    setCurrentIndex: (res)=> set((state)=> ({currentIndex: (state.currentIndex + 1) % res})),
    setIndex: (res)=> set({currentIndex: res})
}))

export default useDataStores
