import Suit1 from "../assets/Dragon-suit.png"
import { useNavigate } from "react-router-dom";

export default function ProductCard()
{
    const navigate = useNavigate();

    function handleProductCard()
    {
        navigate('/product')
    }

    const cardStyles = "h-[30%] w-[90%] xl:h-[90%] xl:w-[25%] bg-[#B7B7B7] rounded-[10px] xl:rounded-[20px] relative";

    return (
        <div className={cardStyles}>
            <img src={Suit1} className='xl:w-full h-full w-[40%] object-contain rounded-[20px]' />
            <div className='flex flex-col justify-between absolute top-[0] left-[40%] xl:left-0 xl:top-[65%] bg-[#131313c7] text-stone-100 xl:w-full xl:h-[35%] h-full w-[60%] rounded-r-[10px] xl:rounded-b-[20px] xl:rounded-t-[10px] p-4'>
                <div>
                    <h1 className='text-2xl text-[#F28928]'>Dragon Suit</h1>
                    <p className='text-[0.5rem] lg:text-[0.75rem] pb-4'>~Year of the Dragon Collection </p>
                    <p className='text-[0.5rem] lg:text-[1rem] xl:text-[10px] pb-2'>The Red Dragon Suit for men exudes bold elegance, featuring intricate dragon motifs and a rich crimson hue, perfect for making a powerful statement at any formal event.</p>                    
                </div>
                <div className='flex justify-between'>
                    <h2 className='text-[1rem] lg:text-[1.25rem]'>Price: $1200</h2>
                    <button 
                        className='text-[#F28928] backdrop-blur-[6px] hover:text-stone-100 text-[1rem] lg:text-[1.25rem] cursor-pointer z-10' 
                        onClick={ handleProductCard }
                    >
                        View
                    </button>
                </div>           
            </div>
        </div>
    )
}