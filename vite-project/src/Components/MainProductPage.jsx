import { useLocation, useParams } from 'react-router-dom';
import React, { createContext, useContext, useEffect, useState } from 'react';
import myContext from '../context/myContext';
import { collection, getDoc,addDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../firebase';

export default function MainProductPage({props}) 
{   
    
    // const context = useContext(myContext);
    // const name = context;
    
    // const [loading, setLoading] = context;
    const [loading, setLoading] = useState(false);
    const [product,setProduct] = useState({});

    const { id } = useParams();
    console.log(id);   

    useEffect(()=>{
      const getProductData = async() =>{
        setLoading(true);
        try{
          const productTemp = await getDoc(doc(db,"products",id))
          console.log(productTemp.data());
          
          // console.log(productTemp.data());
  
          setProduct(productTemp.data());
          
          setLoading(false);
          console.log(product);
        }
        catch(e){
          console.log(e);
          setLoading(false);
          
        }
      };
      getProductData();
    },[id]); 

    const measureDocRef = collection(db, "orders");

    const [measurements, setMeasurements] = useState({
        chest: '',
        waist: '',
        length: '',
        shoulder: '',
        sleeve: ''
      });
    const handleChange = (e) => 
        {
            const { name, value } = e.target;
            const formattedValue = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
            setMeasurements({
            ...measurements,
            [name]: formattedValue
            });
       };

    const handleSubmit = async(e) => {
       e.preventDefault();
       try{
        await addDoc(measureDocRef, {
          measurements: measurements,
          productName: product.Name,
          userEmail: props.email,

       })
       }
       catch(e){
        console.log(e);
       }
       


       // Back-end
       console.log(measurements);
    };

    return (
      <section className="bg-[#180101] h-svh w-full flex items-center justify-center font-Noto text-[#262626]">
          <div className='w-[90%] h-[80%] bg-stone-100 rounded-[10px] flex flex-row items-center justify-between'>
              <div className='w-[30%] h-[70%] flex items-center justify-center'>
                  {loading ? (
                      <p>Loading...</p>
                  ) : (
                      product.ImageArray && product.ImageArray.length > 0 ? (
                          <img 
                              src={product.ImageArray[0]} 
                              className='object-contain w-full h-full' 
                              alt={product.Name || "Product Image"} 
                          />
                      ) : (
                          <p>Image not available</p>
                      )
                  )}
              </div>
              <div className='w-[70%] h-full pl-4 lg:pl-8 bg-[#B7B7B7] py-[5rem] rounded-r-[10px] xl:pr-8'>
                  <div className='flex flex-row justify-between pr-4'>
                      <h1 className='text-sm md:text-xl xl:text-3xl'>{loading ? null : product.Name}</h1>
                      <h1 className='text-sm lg:text-xl xl:text-3xl text-[#865324]'>{loading ? null : product.Price}</h1>
                  </div>
                  <p className='text-[#835123] text-[8px] md:text-[12px] pb-[6px] md:pb-[2rem]'>~Year of the Dragon Collection</p>
                  <p className='text-[0.5rem] lg:text-[1rem] pb-2 w-[90%]'>{loading ? null : product.Description}</p>
                  <p className='text-[0.5rem] md:text-[0.75rem] pb-2 w-[90%]'>Designer and Tailor: Kaito Nakamura</p>
                  <form onSubmit={handleSubmit} className="w-full">
                      <div className="grid grid-cols-2 gap-4 pr-4">
                          {['chest', 'waist', 'length', 'shoulder', 'sleeve'].map((measurement, index) => (
                              <div key={index} className="mb-2">
                                  <label className="block text-[#262626] text-[8px] md:text-sm mb-1 capitalize" htmlFor={measurement}>
                                      {measurement.charAt(0).toUpperCase() + measurement.slice(1)} (in inches):
                                  </label>
                                  <input
                                      type="text"
                                      name={measurement}
                                      id={measurement}
                                      value={measurements[measurement]}
                                      onChange={handleChange}
                                      className="w-full p-1 rounded-sm md:rounded-[5px] focus:outline-none focus:border-b-2 focus:border-[#F28928] text-[8px] md:text-sm"
                                      placeholder={`${measurement.charAt(0).toUpperCase() + measurement.slice(1)} size`}
                                      pattern="^\d+(\.\d{1})?$"
                                      required
                                  />
                              </div>
                          ))}
                      </div>
                      <button type="submit" className="bg-[#F28928] text-white px-4 py-2 rounded-md mt-4 lg:w-full md:w-auto text-sm hover:bg-[#d6761d]">
                          Buy
                      </button>
                  </form>
              </div>
          </div>
      </section>
  );
}
