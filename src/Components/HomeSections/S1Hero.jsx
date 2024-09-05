
import hero1 from "../../assets/images/hreo1.png"

const S1Hero = () => {
    const openPDF = () => {
        window.open("  ", "_blank");
    };
    return (
        <>
            <div className=" bg-black min-h-[90vh]" >
                <div id="Hero" className=" relative  min-h-[90vh] w-full h-full justify-center flex flex-col items-center px-10  phone:px-5 py-10" >

                    

                    <div className="min-h-fit  bg-[#121212] rounded-3xl py-10 w-full flex flex-col  ">

                        <div id="abt4">
                            <div id="listing" className='   relative min-h-[30vh]   px-10 py-10 tablet:px-10     tablet:phone:px-3   flex flex-col gap-20'>



                                <div id="filler-main" className='flex items-center z-10  w-full gap-10 tablet:flex-col    '>

                                    <div data-aos="fade-left" id="filler-right" className=' w-[60%] flex flex-col justify-center   gap-10 tablet:gap-5 tablet:w-[100%] tablet:text-center '>
                                        <h2 className=" ilight   font-bold  text-gradient text-base  tracking-[7px]  w-fit  tablet:mx-auto tablet:phone:text-[12px] pointer-events-none uppercase  " > We make you Profitable </h2>
                                        <h1 /*data-aos="fade-up"*/ className='text-5xl   desktop:text-5xl ibold uppercase desktop:tablet:text-4xl  desktop:tablet:phone:text-2xl  leading-snug desktop:leading-tight desktop:tablet:leading-normal 
                                        desktop:tablet:phone:leading-normal 
                                         
                                        '>
                                             
                                            THE FIRST SMART <span className="text-gradient border-b-2 border-[#8AFADE]">BUSINESS COMMUNITY </span> <br />
                                            CONCEPT WORLDWIDE
                                        </h1>


                                        <div /*data-aos="fade-up"*/ className="  max-w-2xl  ">

                                            <p className="text-base leading-relaxed font-thin tablet:phone:text-sm  text-gray-300 tablet:phone:leading-snug  tablet:text-center">
                                                Smart BC Concept is a global decentralized platform designed for everyone to earn. With smart contracts ensuring automated and transparent rewards, users are empowered to achieve financial growth and freedom. By actively participating and making timely payments, the entire community benefits continuously.
                                            </p>
                                        </div>

                                        <div className="flex tablet:justify-center " >
                                            <div onClick={openPDF} className='rbtn rounded-full'>
                                                <span className="text rounded-full px-5 py-3 ">Join Community</span>
                                            </div>
                                        </div>

                                    </div>

                                    <div data-aos="zoom-in"  id="filler-left" className=' z-10 w-[45%] h-[100%] flex tablet:w-[80%] tablet:phone:w-[100%] justify-end  tablet:justify-center '>
                                        <img loading="lazy"
                                            src={hero1}
                                            alt='VOIP  '
                                            className='   '
                                        />
                                    </div>




                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default S1Hero