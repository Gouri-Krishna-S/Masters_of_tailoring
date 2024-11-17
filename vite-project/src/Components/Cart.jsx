import Header from "./Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCartShopping } from '@fortawesome/free-solid-svg-icons'


export default function Cart()
{
    return (
        <section className="bg-[#180101] h-screen w-screen font-Noto">
            <div className="h-[20%] lg:h-[15%] mx-auto flex flex-col gap-4 justify-center items-center">
                <h1 className="text-4xl text-center text-[#B7B7B7] uppercase">
                    My Cart
                </h1>
                <div className="h-[4px] w-[90px] bg-[#F28928] rounded-md"> </div>
            </div>
            <div className="w-[95%] mx-auto bg-stone-100 h-[80%] lg:h-[85%] rounded-md relative">
                <FontAwesomeIcon icon={faShoppingCart} className="text-[#f28a286d] text-7xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
            </div>
        </section>
        
    )
}