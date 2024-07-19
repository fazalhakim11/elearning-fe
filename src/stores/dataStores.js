import { create } from "zustand";

const useDataStores = create(set => ({
    chapters: [],
    setChapters: (data)=> set({chapters: data}),
    isLoading: false,
    setIsLoading: (res)=> set({isLoading: res})
}))

export default useDataStores
