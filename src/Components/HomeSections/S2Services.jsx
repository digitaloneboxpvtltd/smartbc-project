
import i1 from "../../assets/images/i1.png"
const S2Services = () => {
    return (
        <>
            <div id="Services" className=" bg-black min-h-[90vh]" >
                <div className="min-h-fit    rounded-3xl py-10 w-full flex flex-col  ">

                    <div id=" ">
                        <div id="listing" className='   relative min-h-[30vh]   px-10 py-10 tablet:px-10     tablet:phone:px-5  flex flex-col gap-20'>


                            <div id="filler-main" className='flex justify-evenly    items-center z-10  w-full tablet:gap-10 tablet:flex-col    '>

                                <div id="filler-right" className='   w-[40%] flex flex-col justify-center   gap-10 tablet:gap-5 tablet:w-[100%]   '>
                                    <h2 className=" ilight   font-bold  text-gradient text-sm  tracking-[7px]  w-fit   tablet:phone:text-sm pointer-events-none uppercase " > our  Services </h2>
                                    <h1 /*data-aos="fade-up"*/ className='text-5xl   desktop:text-4xl ibold uppercase desktop:tablet:text-3xl  desktop:tablet:phone:text-2xl   leading-tight '>
                                        what we are <span className="border-b-2 border-[#8AFADE]    text-gradient  ">offering</span> <br />

                                    </h1>


                                    <div /*data-aos="fade-up"*/ className="  max-w-[30rem]  ">

                                        <p className="text-base leading-loose font-thin tablet:phone:text-sm  text-gray-300      tablet:phone:leading-relaxed">
                                            We’re ready to launch the next big crypto coin – and trust us,  is BIG. Thanks to trending on crypto platforms and building up a loyal following of   fans.trending on crypto platforms and
                                        </p>
                                        <br /><br />
                                        <p className="text-base leading-loose font-thin tablet:phone:text-sm  text-gray-300      tablet:phone:leading-relaxed">
                                            We’re ready to launch the next big crypto coin – and trust us,  is BIG. Thanks to trending on crypto platforms and building up a loyal following of   fans.trending on crypto platforms and
                                        </p>
                                    </div>



                                </div>

                                <div /*data-aos="zoom-in" */ id="filler-left" className=' z-10   w-[50%]   h-[100%] flex justify-end tablet:w-[100%] tablet:phone:w-[100%]    tablet:justify-center '>
                                    <div className="flex justify-center gap-5 flex-wrap h-fit max-w-[35rem]">

                                        <div className=" bg-[#121212] rounded-sm min-h-[12rem] max-w-[16rem] min-w-[10rem] p-5 ">
                                            <div className=" flex flex-col items-center gap-3 text-center" >
                                                <img src={i1} className=" w-[3rem]" alt="" />
                                                <h2 className=" text-xl font-bold" >Premium Feature</h2>
                                                <p className=" text-base font-thin " >Lorem ipsum dolor sit amet consectetur Lorem  . </p>
                                            </div>

                                        </div>
                                        <div className="bg-[#121212] rounded-sm bg-gradient-to-t from-[#132B26] to-[#0B0B0B] min-h-[12rem] max-w-[16rem] min-w-[10rem]  ">
                                            <div className=" flex flex-col items-center gap-3 text-center" >
                                                <img src={i1} className=" w-[3rem]" alt="" />
                                                <h2 className=" text-xl font-bold" >Premium Feature</h2>
                                                <p className=" text-base font-thin " >Lorem ipsum dolor sit amet consectetur Lorem  . </p>
                                            </div>
                                        </div>
                                        <div className="bg-[#121212] rounded-sm bg-gradient-to-t from-[#132B26] to-[#0B0B0B] min-h-[12rem] max-w-[16rem]  ">
                                            <div className=" flex flex-col items-center gap-3 text-center" >
                                                <img src={i1} className=" w-[3rem]" alt="" />
                                                <h2 className=" text-xl font-bold" >Premium Feature</h2>
                                                <p className=" text-base font-thin " >Lorem ipsum dolor sit amet consectetur Lorem  . </p>
                                            </div>
                                        </div>
                                        <div className="bg-[#121212] rounded-sm min-h-[12rem] max-w-[16rem]  ">
                                            <div className=" flex flex-col items-center gap-3 text-center" >
                                                <img src={i1} className=" w-[3rem]" alt="" />
                                                <h2 className=" text-xl font-bold" >Premium Feature</h2>
                                                <p className=" text-base font-thin " >Lorem ipsum dolor sit amet consectetur Lorem  . </p>
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

export default S2Services