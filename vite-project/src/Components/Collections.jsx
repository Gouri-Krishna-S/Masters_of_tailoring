import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { db } from "../firebase";
import { getDocs,collection } from "firebase/firestore";
import React from "react";
import { useState,useEffect } from "react";

export default function Collections()
{

    const [productList, setProductList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 2;

    

    const productCollectionRef = collection(db,"products");

    useEffect(() => {
        const getProductList = async() => {
            //read data from db and update state of product list
            try{
                const data = await getDocs(productCollectionRef);
                const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id,

                }));
                setProductList(filteredData);
                
            }
            catch(e){
                console.log(e);
            }
            
        };
        getProductList();
    }, []); 
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(productList.length / itemsPerPage));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(productList.length / itemsPerPage)) % Math.ceil(productList.length / itemsPerPage));
    };

    const startIndex = currentIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedProducts = productList.slice(startIndex, endIndex);
    return (
        <section id="collections" className="bg-[#221D1D] h-svh w-full">
            <div className="h-[6rem] flex flex-row items-center justify-between px-[1.25rem]">
                <img src="./decoration.png" />
                <h1 className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl text-stone-100">Our <span className="text-[#F28928]">Collections</span></h1>
                <img src="./decoration.png" />
            </div>

            <div className="bg-stone-100 w-[98%] h-[85%] mx-auto rounded-[20px] relative">
                <div className="h-full w-full flex flex-col xl:flex-row items-center justify-evenly">
                {displayedProducts.map((product)=>(
                        <div key={product.id}>
                            <ProductCard id = {product.id} />
                            
                        </div>
                    ))}
                    
                </div>
                <div className='flex flex-row items-center h-full w-full justify-between px-1 md:px-4 absolute top-0 left-0'>
                    <button className="md:p-1 flex items-center" onClick={handlePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} className="text-[#221D1D] text-lg" />
                    </button>
                    <button className="md:p-1 flex items-center" onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} className="text-[#221D1D] text-lg" />
                    </button>                   
                </div>
            </div>
        </section>
    );        
}