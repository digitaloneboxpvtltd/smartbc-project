
import workleft from "../../assets/images/workleft.png"
import i1 from "../../assets/images/i1.png"
const S3WorkingProcess = () => {
    return (
        <>
            <div id="Services" className=" bg-black min-h-[90vh]" >
                <div className="min-h-fit    rounded-3xl py-10 w-full flex flex-col  ">

                    <div id=" ">
                        <div id="listing" className='   relative min-h-[30vh]   px-10 py-10 tablet:px-10     tablet:phone:px-5  flex flex-col gap-20'>


                            <div id="filler-main" className='flex justify-evenly    items-center z-10  w-full tablet:gap-10 tablet:flex-col    '>

                                <div /*data-aos="zoom-in" */ id="filler-left" className=' z-10   w-[40%]   h-[100%] flex justify-center tablet:w-[100%] tablet:phone:w-[100%]    tablet:justify-center '>
                                     
                                    
                                    <img src={workleft} className=" w-[25rem]" alt="" />


                                </div>


                                <div id="filler-right" className='   w-[40%] flex flex-col justify-center   gap-10 tablet:gap-5 tablet:w-[100%]   '>
                                    <h2 className=" ilight   font-bold  text-gradient text-sm  tracking-[7px]  w-fit   tablet:phone:text-sm pointer-events-none uppercase " > working process</h2>
                                    <h1 /*data-aos="fade-up"*/ className='text-5xl   desktop:text-4xl ibold uppercase desktop:tablet:text-3xl  desktop:tablet:phone:text-2xl   leading-tight '>
                                        How it <span className="border-b-2 border-[#8AFADE]    text-gradient  ">Works</span> <br />

                                    </h1>


                                    <div /*data-aos="fade-up"*/ className="  max-w-[40rem]  ">

                                        <p className="text-base leading-loose font-thin tablet:phone:text-sm  text-gray-300      tablet:phone:leading-relaxed">
                                            We’re ready to launch the next big crypto coin – and trust us,  is BIG. Thanks to trending on crypto platforms and building up a loyal following of   fans.trending on crypto platforms and
                                        </p>
                                        <br /><br />
                                        <div className="text-base leading-loose font-thin flex flex-wrap gap-3 tablet:phone:text-sm  text-gray-300      tablet:phone:leading-relaxed"
                                        >

                                            <div className=" flex p-2 max-w-[45%]  laptop:max-w-[100%]    gap-3  " >
                                                <img src={i1} className=" h-fit w-[2rem]" alt="" />
                                                <div className=" space-y-2 " >

                                                    <h2 className="  text-xl font-bold" >Premium Feature</h2>
                                                    <p className=" ilight text-sm font-thin " >We’re ready to launch the next big crypto coin – and  </p>
                                                </div>
                                            </div>
                                            <div className=" flex p-2 max-w-[45%] laptop:max-w-[100%]      gap-3  " >
                                                <img src={i1} className=" h-fit w-[2rem]" alt="" />
                                                <div className=" space-y-2 " >

                                                    <h2 className="  text-xl font-bold" >Premium Feature</h2>
                                                    <p className=" ilight text-sm font-thin " >We’re ready to launch the next big crypto coin – and  </p>
                                                </div>
                                            </div>
                                            <div className=" flex p-2 max-w-[45%] laptop:max-w-[100%]      gap-3  " >
                                                <img src={i1} className=" h-fit w-[2rem]" alt="" />
                                                <div className=" space-y-2 " >

                                                    <h2 className="  text-xl font-bold" >Premium Feature</h2>
                                                    <p className=" ilight text-sm font-thin " >We’re ready to launch the next big crypto coin – and  </p>
                                                </div>
                                            </div>
                                            <div className=" flex p-2 max-w-[45%] laptop:max-w-[100%]      gap-3  " >
                                                <img src={i1} className=" h-fit w-[2rem]" alt="" />
                                                <div className=" space-y-2 " >

                                                    <h2 className="  text-xl font-bold" >Premium Feature</h2>
                                                    <p className=" ilight text-sm font-thin " >We’re ready to launch the next big crypto coin – and  </p>
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