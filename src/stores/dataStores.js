import { create } from "zustand";

const useDataStores = create(set => ({
    chapters: [],
    setChapters: (res)=> set({chapters: res}),
    subChapters: [],
    setSubChapters: (res)=> set({subChapters: res}),
    materials: [],
    setMaterials: (res) => set({materials: res}),
    isLoading: false,
    setIsLoading: (res)=> set({isLoading: res})
}))

export default useDataStores
