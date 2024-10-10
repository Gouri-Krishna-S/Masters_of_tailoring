import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Collections()
{
    return (
        <section id="collections" className="bg-[#221D1D] h-svh w-full">
            <div className="h-[6rem] flex flex-row items-center justify-between px-[1.25rem]">
                <img src="./decoration.png" />
                <h1 className="font-serif font-medium text-2xl md:text-3xl lg:text-4xl text-stone-100">Our <span className="text-[#F28928]">Collections</span></h1>
                <img src="./decoration.png" />
            </div>

            <div className="bg-stone-100 w-[98%] h-[80%] mx-auto rounded-[20px] relative">
                <div className="h-full w-full flex flex-col lg:flex-row items-center justify-evenly">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className='flex flex-row items-center h-full w-full justify-between md:px-4 absolute top-0 left-0'>
                    <FontAwesomeIcon icon={faChevronLeft} className="text-[#221D1D] text-lg" />
                    <FontAwesomeIcon icon={faChevronRight} className="text-[#221D1D] text-lg" />
                </div>
            </div>
        </section>
    );        
}