import Cloth_material from '../assets/Leonardo_cloth-material.jpg';
import Tailor from "../assets/Tailor-last.jpg"

function Materials(){
    return (
        <section id="materialspage" className="bg-[#180101] h-screen w-full">
            <div className='h-full w-full flex flex-col p-4 items-center justify-center'>
                <div className="h-[50%] w-full flex flex-col md:flex-row items-start md:items-center py-[1.25rem] gap-8">
                    <div className='w-full md:w-[40%] h-[30%] md:h-[75%] xl:h-[80%] flex justify-between items-center pl-2 md:pl-8 border-b-2 border-stone-100 md:border-none pb-2 md:pb-0'>
                        <img className='w-[6rem] h-[5rem] md:w-[80%] md:h-full object-contain' src={ Cloth_material }/>
                        <h3 className="md:hidden w-full font-serif text-center font-medium text-xl md:text-3xl lg:text-4xl capitalize text-stone-100"><span className="text-[#F28928]">Materials</span> we trust</h3>
                    </div>

                    <div className='flex flex-col justify-center md:items-start w-full md:w-2/3 md:gap-8 pl-2 md:pl-0 h-[70%]'>
                        <h3 className="hidden md:block w-[80%] font-serif text-center font-medium text-2xl md:text-4xl capitalize text-stone-100"><span className="text-[#F28928]">Materials</span> we trust</h3>
                        <p className='text-stone-100 w-full md:w-[85%] text-[14px] md:text-[1rem]'>
                            At <span className="text-[#F28928]">Mastros</span> we believe that the foundation of exceptional clothing lies in the quality of the materials. From fine cottons and silks to rich wool blends we choose only the best to give you comfort, style and longevity in every garmnent. Our commitment to quality means that your
                            custom tailored clothing not only looks impeccable but feels exquisite, wear after wear.
                        </p>
                    </div>
                </div>

                <div className='w-[98%] bg-[#F28928] mx-auto py-[1px]'>

                </div>


                <div className="h-[50%] w-full flex flex-col md:flex-row items-start md:items-center py-[1.25rem] gap-8">
                    <div className='flex flex-col justify-center md:items-start w-full md:w-2/3 md:gap-8 order-2 md:order-1 md:pl-8'>
                        <h3 className="w-[85%] text-center hidden md:block font-serif font-medium text-2xl md:text-4xl text-stone-100 capitalize"><span className="text-[#F28928]">Artisans</span> Behind Every Stitch</h3>
                        <p className='text-stone-100 w-full md:w-[85%] text-[14px] md:text-[1rem]'>
                            At <span className="text-[#F28928]">Mastros</span> our tailors are more than craftsmen—they are true artists, dedicated to creating garments that reflect both tradition and innovation. Each stitch they sew tells a story of mastery, precision, and passion. With decades of experience and an unwavering commitment to excellence, our tailors bring your vision to life, transforming fine fabrics into wearable works of art.
                        </p>
                    </div>
                    <div className='w-full md:w-[40%] h-[30%] md:h-[75%] xl:h-[80%] flex justify-between items-center pl-2 md:pl-8 order-1 md:order-2 border-b-2 border-stone-100 md:border-none pb-2 md:pb-0'>
                        <img className='w-[6rem] h-[5rem] md:w-[80%] md:h-full object-contain' src={ Tailor }/>
                        <h3 className="md:hidden w-full font-serif text-center font-medium text-lg md:text-3xl lg:text-4xl capitalize text-stone-100"><span className="text-[#F28928]">Artisans</span> Behind Every Stitch</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Materials;