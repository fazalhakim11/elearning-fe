import { create } from "zustand";

import image1 from "../assets/image/Elearning-Image1.png";
import image2 from "../assets/image/Elearning-Image2.png";
import image3 from "../assets/image/Elearning-Image3.png";

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
    setIndex: (res)=> set({currentIndex: res}),
    contents: [
        {
          image: image1,
          h: "Online Learning",
          p: `Study by yourself, anytime and anywhere. Lots of learning, international
              curricullum, and easy to understand`,
        },
        {
          image: image2,
          h: "All in One App",
          p: `Everything you need is present in your device. From natural science to 
              sosial science, and even further`,
        },
        {
          image: image3,
          h: "Future Education",
          p: `Various learning modes make it easier for you to understand, easy to use, and more
              importantly fun`,
        },
      ]
}))

export default useDataStores
