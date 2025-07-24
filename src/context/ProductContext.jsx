import React, { createContext, useState } from "react";

export const productContext = createContext(null);

const ProductContext = (props) => {
  const [data, setdata] = useState([
    {
      id: "1",
      title: "FREYA",
      disc: "Embodying divine elegance, this ethereal gown features cascading layers of silk chiffon that dance with every movement. Delicate hand-embroidered details and a sculpted bodice create a goddess-like silhouette perfect for red carpet moments.",
      price: "$7,999",
      image1: "/src/assets/images/1-1.png",
      image2: "/src/assets/images/1-2.png",
      unique: "not",
    },

    {
      id: "2",
      title: "CAPE OBSIDIAN",
      disc: "A statement of power and sophistication, this dramatic cape dress merges contemporary architecture with timeless glamour. The flowing obsidian fabric creates striking shadows while the integrated cape adds theatrical flair to any grand entrance.",
      price: "$7,899",
      image1: "/src/assets/images/2-1.jpg",
      image2: "/src/assets/images/2-2.jpg",
      unique: "not",
    },
    {
      id: "3",
      title: "NIKA",
      disc: "Victory personified in couture form. This structured masterpiece features bold geometric lines and luxurious fabric manipulation, creating a warrior-goddess aesthetic. Pearl and crystal embellishments add celestial sparkle to the commanding silhouette.",
      price: "$8,500",
      image1: "/src/assets/images/3-1.jpg",
      image2: "/src/assets/images/3-2.jpg",
      unique: "not",
    },
    {
      id: "4",
      title: "NOCTUELLE",
      disc: "Inspired by midnight moths and moonlit gardens, this enchanting dress features delicate lace appliqués and shimmering sequins that catch light like dewdrops. The romantic A-line silhouette flows effortlessly, perfect for twilight soirées.",
      price: "$3,600",
      image1: "/src/assets/images/4-1.jpg",
      image2: "/src/assets/images/4-2.jpg",
      unique: "not",
    },

    {
      id: "5",
      title: "BASTET",
      disc: "Channeling ancient Egyptian elegance with modern sensibility. This sleek column dress features metallic threading and geometric cutouts that honor the feline goddess. The form-fitting silhouette exudes confidence and mystique.",
      price: "$5,500",
      image1: "/src/assets/images/5-1.jpg",
      image2: "/src/assets/images/5-2.jpg",
      unique: "not",
    },
    {
      id: "6",
      title: "FREYA",
      disc: "A romantic interpretation of Norse beauty, featuring soft tulle layers and delicate floral embroidery. The corseted bodice and flowing skirt create an enchanted forest fairy tale, perfect for garden parties and elegant celebrations.",
      price: "$3,900",
      image1: "/src/assets/images/6-1.jpg",
      image2: "../../public/product/6-2.jpg",
      unique: "not",
    },
    {
      id: "7",
      title: "ELECTRA",
      disc: "Pure electric energy captured in haute couture. This show-stopping piece features lightning-inspired beadwork and a daring silhouette that commands attention. The metallic finish and sharp tailoring create an unforgettable presence.",
      price: "$3,900",
      image1: "/src/assets/images/7.jpg",
      image2: "/src/assets/images/7.jpg",
      unique: "one",
    },
  ]);
  return (
    <productContext.Provider value={{ data, setdata }}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContext;
