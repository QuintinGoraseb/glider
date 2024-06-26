



export default function BigHero() {



    return(
        <>
        <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
            {/*** Hero Section ***/}
            <div className="hero h-screen xl:h-[695px] bg-hero bg-center bg-cover bg-no-repeat bg-fixed relative z-20">
                <div className="container max-auto h-full flex items-center justify-center">
                    <div className="top-[40%] w-full text-[#f6f6f6] text-center flex flex-col p-4">
                        <h1 className="font-[lato] font-bold text-4xl md:text-5xl drop-shadow-2xl"><span className="font-[lato] text-secondary">Glider</span><br/>Human Capital<br/>Business Consultants</h1>
                        <h2 className="font-[lato] text-lg text-secondary">Tailored solutions to your needs<span className="text-[#f6f6f6]">!</span></h2>
                        <div className="hidden sm:flex flex-col mt-8 items-center">
                            <button className="herobtn bg-primbtn hover:primary items-center mx-auto xl:mx-0 "><a href="/contact">GET IN TOUCH NOW</a>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-[#c0c0c0]">
                            <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}