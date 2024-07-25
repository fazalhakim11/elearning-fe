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
    setUserId: (res)=> set({userId: res})
}))

export default useDataStores
