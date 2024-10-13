import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ProductCard from './ProductCard';
import { getDocs,collection } from "firebase/firestore";
import { useState,useEffect } from 'react';
import { db } from '../firebase';

export default function Masterpieces()
{   

    const [productList, setProductList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const productCollectionRef = collection(db,"products");
    const itemsPerPage = 2;

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
        <section id="products" className="bg-stone-100 h-svh w-full">
            <div className="h-[6rem] flex flex-row items-center justify-between px-[1.25rem]">
                <img src="./decoration.png" />
                <h1 className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl text-[#262626]">Our <span className="text-[#F28928]">Masterpieces</span></h1>
                <img src="./decoration.png" />
            </div>

            <div className="bg-[#221D1D] w-[98%] h-[85%] mx-auto rounded-[20px] relative">
                <div className="h-full w-full flex flex-col xl:flex-row items-center justify-evenly">
                    {displayedProducts.map((product)=>(
                            <ProductCard id = {product.id} key={product.id} />
                    ))}
                    
                </div>
                <div className='flex flex-row items-center h-full w-full justify-between px-1 md:px-4 absolute top-0 left-0'>
                    <button className="md:p-1 flex items-center" onClick={handlePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} className="text-[#F28928] text-lg" />
                    </button>
                    <button className="md:p-1 flex items-center" onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} className="text-[#F28928] text-lg" />
                    </button>                   
                </div>
            </div>
        </section>
    )
}