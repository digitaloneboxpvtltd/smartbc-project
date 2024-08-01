
import workleft from "../../assets/images/workleft.png"
import j1 from "../../assets/images/j1.png"
import j2 from "../../assets/images/j2.png"
import j3 from "../../assets/images/j3.png"
import j4 from "../../assets/images/j4.png"
const S3WorkingProcess = () => {
    return (
        <>
            <div id="How_it_works" className=" bg-black min-h-[90vh]" >
                <div className="min-h-fit    rounded-3xl py-10 w-full flex flex-col  ">

                    <div id=" ">
                        <div id="listing" className='   relative min-h-[30vh]   px-10 py-10 tablet:px-10     tablet:phone:px-5  flex flex-col gap-20'>


                            <div id="filler-main" className='flex justify-evenly    items-center z-10  w-full tablet:gap-10 tablet:flex-col    '>

                                <div data-aos="zoom-in" id="filler-left" className=' z-10   w-[40%]   h-[100%] flex justify-center tablet:w-[100%] tablet:phone:w-[100%]    tablet:justify-center '>


                                    <img src={workleft} className=" w-[25rem]" alt="" />


                                </div>


                                <div data-aos="fade-right" id="filler-right" className='   w-[40%] flex flex-col justify-center   gap-10 tablet:gap-5 tablet:w-[100%]   '>
                                    <h2 className=" ilight   font-bold  text-gradient text-sm  tracking-[7px]  w-fit   tablet:phone:text-sm pointer-events-none uppercase " > working process</h2>
                                    <h1 /*data-aos="fade-up"*/ className='text-5xl   desktop:text-4xl ibold uppercase desktop:tablet:text-3xl  desktop:tablet:phone:text-2xl   leading-tight '>
                                        How it <span className="border-b-2 border-[#8AFADE]    text-gradient  ">Works</span> <br />

                                    </h1>


                                    <div /*data-aos="fade-up"*/ className="  max-w-[40rem]  ">

                                        <p className="text-base leading-loose font-thin tablet:phone:text-sm  text-gray-300      tablet:phone:leading-relaxed">

                                            In the Smart BC Concept, you begin by joining our network, selecting a membership level that aligns with your goals. You then explore our extensive range of high-quality products, gaining firsthand experience to confidently share them with your network through various marketing channels
                                        </p>
                                        <br /><br />
                                        <div className="text-base leading-loose font-thin flex flex-wrap gap-3 tablet:phone:text-sm  text-gray-300      tablet:phone:leading-relaxed"
                                        >

                                            <div className=" flex p-2 max-w-[45%]  laptop:max-w-[100%]    gap-3  " >
                                                <img src={j1} className=" h-fit w-[2rem]" alt="" />
                                                <div className=" space-y-2 " >

                                                    <h2 className="  text-xl font-bold" >Join the Network
                                                    </h2>
                                                    <p className=" ilight text-sm font-thin " > Sign up to become a member of the Smart BC Concept community.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className=" flex p-2 max-w-[45%] laptop:max-w-[100%]      gap-3  " >
                                                <img src={j2} className=" h-fit w-[2rem]" alt="" />
                                                <div className=" space-y-2 " >

                                                    <h2 className="  text-xl font-bold" >Explore Our Products</h2>
                                                    <p className=" ilight text-sm font-thin " >Gain access to our wide range of high-quality products, including health, wellness, and digital services.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className=" flex p-2 max-w-[45%] laptop:max-w-[100%]      gap-3  " >
                                                <img src={j3} className=" h-fit w-[2rem]" alt="" />
                                                <div className=" space-y-2 " >

                                                    <h2 className="  text-xl font-bold" >Share the Products
                                                    </h2>
                                                    <p className=" ilight text-sm font-thin " >Introduce our products to your network through social media, personal contacts, and other marketing channels.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className=" flex p-2 max-w-[45%] laptop:max-w-[100%]      gap-3  " >
                                                <img src={j4} className=" h-fit w-[2rem]" alt="" />
                                                <div className=" space-y-2 " >

                                                    <h2 className="  text-xl font-bold" >Achieve Financial Freedom
                                                    </h2>
                                                    <p className=" ilight text-sm font-thin " >With consistent effort and dedication, build a sustainable income stream.  </p>
                                                </div>
                                            </div>

                                        </div>
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

export default S3WorkingProcess