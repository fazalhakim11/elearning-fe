import { create } from "zustand";

const useDataStores = create(set => ({
    chapters: [],
    setChapters: (res)=> set({chapters: res}),
    isLoading: false,
    setIsLoading: (res)=> set({isLoading: res})
}))

export default useDataStores
