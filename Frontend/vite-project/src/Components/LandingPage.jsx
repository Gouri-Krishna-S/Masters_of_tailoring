import Header from "./Header";

function LandingPage({ isLogged })
{
    return (
        <div className="w-full h-full font-Noto" id="home">
            <Header isLogged={isLogged} />
            <div className="h-svh w-full bg=[#17383E]">
                <img src="/Landing_Page.png" alt="landing page" className="h-full w-full object-cover lg:object-fill " />
            </div>
            <div className="w-[25rem] flex flex-col gap-2 text-center items-center md:w-[35rem] absolute top-1/2 left-1/2 text-stone-100 -translate-x-1/2 -translate-y-1/2 backdrop-blur-[4px] p-2 z-10 rounded-md">
                <h1 className="text-4xl md:text-5xl font-bold shadow-text">Masters of <span className="text-[#F28928]">Tailoring</span></h1>
                <p className="text-[#66E7E1] font-bold shadow-text-light text-[1rem]">Crafting Excellence, One Stitch at a Time</p>
                <span className="backdrop-blur-lg rounded-[0.5rem] w-[8rem] py-2 bg-[#13131342] hover:text-[#F28928] border-[#262626] border-2">
                    <a href="#products">Explore Now</a>
                </span>
            </div>
        </div>
    )
}

export default LandingPage;