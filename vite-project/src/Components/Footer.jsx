export default function Footer() {
    return (
        <section className="w-full h-24 bg-black flex flex-col items-center justify-center p-8 gap-2">
            <div className="flex items-center justify-center gap-4">
                <img src="/Website-logo.png" alt="Logo" className="w-12 h-12" />
                <p className="text-[#F28928] font-semibold">Mastros</p>
            </div>
            <p className="text-center text-stone-100 text-sm md:mt-2">
                Copyright &copy;2024. All rights reserved.
            </p>
        </section>
    );
}
