import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSideBar from "../components/Products/FilterSideBar";
import ProductGrid from "../components/Products/ProductGrid";
import SortOptions from "../components/Products/SortOptions";
const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=2" }],
        },
        {
          _id: 2,
          name: "product 2",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=3" }],
        },
        {
          _id: 3,
          name: "product 3",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=4" }],
        },
        {
          _id: 4,
          name: "product 4",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=5" }],
        },
        {
          _id: 5,
          name: "product 5",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=6" }],
        },
        {
          _id: 6,
          name: "product 6",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=7" }],
        },
        {
          _id: 7,
          name: "product 7",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=8" }],
        },
        {
          _id: 8,
          name: "product 8",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=9" }],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* {mobile filter btn} */}
      <button className="lg:hidden border p-2 flex justify-center items-center">
        <FaFilter onClick={toggleSidebar} className="mr-2" />
      </button>
      {/* {filer side} */}
      <div
    ref={sidebarRef}
    className={`${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
  >
        <FilterSideBar />
      </div>
      <div className="flex-grow p-4 ">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/* {sort options} */}
        
            <SortOptions/>
        {/* {product grid} */}
        <ProductGrid products={products}/>
      </div>
    </div>
  );
};

export default CollectionPage;
