import CollectionStar from '/CollectionStart.png';

export default function About() {
    return (
        <section id="about" className="w-full h-screen bg-[#F2E7DC] flex flex-col md:flex-row items-center justify-center">
            {/* Image container */}
            <div className="w-full h-[30%] md:w-1/3 md:h-full flex flex-row justify-center items-center gap-[1rem]">
                <img 
                    src={CollectionStar} 
                    alt="group" 
                    className="max-w-[80%] h-[80%] object-contain"
                />
                <div className='text-left'>
                    <h1 className='md:hidden font-Sail text-3xl xl:text-4xl text-left text-[#260502]'>Where Tailoring Meets Artistry</h1>
                </div>
            </div>

            <div className="w-full md:w-2/3 h-[70%] md:h-full flex flex-col md:justify-center gap-[2.5rem] xl:gap-[4rem]">
                <div className='text-left'>
                    <h1 className='hidden md:block font-Sail text-3xl xl:text-4xl text-left text-[#260502]'>Where Tailoring Meets Artistry</h1>
                </div>
                <div className='px-8 md:px-0 md:w-[90%] text-[1rem] font-Noto w-full xl:w-[80%] flex flex-col gap-[2rem] md:gap-[3rem] text-[#262626]'>
                    <p>
                    At <span className='text-[#F28928]'>Mastros</span>, we take pride in the timeless art of custom tailoring. Every piece of clothing is handmade with precision, ensuring a perfect fit that reflects your personal style. Our customers can provide their exact measurements, choose from a curated selection of fabrics and designs, or share their own creative vision with us.
                    </p>
                    <p>
                    With years of experience and a passion for fine craftsmanship, we are committed to delivering garments that are as unique as the individuals who wear them. At <span className='text-[#F28928]'>Mastros</span>, we don’t just tailor clothes — we create ever-lasting impressions.
                    </p>
                </div>
            </div>
        </section>
    );
}



{/* <section id="about" className="w-full h-svh bg-[#F2E7DC] flex flex-col md:flex-row items-center justify-center">
    <div className="w-full md:w-1/3 h-full flex justify-center items-center">
        <div className="relative w-full h-full">
            <div className="min-w-[6rem] min-h-[10rem] w-[50%] h-[35%] md:w-[50%] md:h-[25%] lg:h-[35%] xl:h-1/2 object-fill absolute top-[15%] md:top-[10%] left-[40%]">
                <img src={TailorShop} alt="Tailor shop" className="w-full h-full rounded-[20px] object-cover"/>
            </div> 
            <div className="min-w-[6rem] min-h-[10rem] w-[50%] h-[35%] md:w-[50%] md:h-[25%] lg:h-[35%] xl:h-1/2 object-fill absolute top-[40%] left-[10%]">
                <img src={TailorEquip} alt="Tailor tools" className="w-full h-full rounded-[20px] object-cover"/>
            </div> 
        </div>
    </div>
    <div className="w-full md:w-2/3 h-full">
    </div>
</section> */}