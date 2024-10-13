import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import React from "react";

export default function ProductCard({ id }) {
    const navigate = useNavigate();
    const [productList, setProductList] = useState([]);
    const productCollectionRef = collection(db, "products");

    useEffect(() => {
        const getProductList = async () => {
            try {
                const data = await getDocs(productCollectionRef);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setProductList(filteredData);
            } catch (e) {
                console.log(e);
            }
        };
        getProductList();
    }, []);

    // Find the product corresponding to the provided id
    const thisProduct = productList.find((product) => product.id === id);

    const cardStyles = "h-[200px] w-[90%] max-w-[400px] lg:max-w-[80%] bg-[#B7B7B7] rounded-[10px] xl:rounded-[20px] relative p-4";

    return (
        <div className={cardStyles}>
            {thisProduct ? ( // Conditional rendering check
                <>
                    <img 
                        src={thisProduct.ImageArray[0]} 
                        alt="Product 1" 
                        className="w-1/3 h-auto object-cover rounded-[10px] mb-2"
                    />
                    <div className='flex flex-col justify-between absolute top-[0] left-[40%] xl:left-0 xl:top-[65%] bg-[#131313c7] text-stone-100 xl:w-full xl:h-[35%] h-full w-[60%] rounded-r-[10px] xl:rounded-b-[20px] xl:rounded-t-[10px] p-4'>
                        <div>
                            <h1 className='text-2xl text-[#F28928]'>{thisProduct.Name}</h1>
                            <p className='text-[0.5rem] lg:text-[0.75rem] pb-4'>~Year of the Dragon Collection </p>
                            <p className='text-[0.5rem] lg:text-[1rem] xl:text-[10px] pb-2'>{thisProduct.Description}</p>
                        </div>
                        <div className='flex justify-between'>
                            <h2 className='text-[1rem] lg:text-[1.25rem]'>{thisProduct.Price}</h2>
                            <button 
                                className='text-[#F28928] backdrop-blur-[6px] hover:text-stone-100 text-[1rem] lg:text-[1.25rem] cursor-pointer z-10' 
                                onClick={() => navigate(`/product/${id}`)}
                            >
                                View
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p> // Loading state
            )}
        </div>
    );
}
