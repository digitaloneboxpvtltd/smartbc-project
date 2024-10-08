
import i1 from "../../assets/images/i1.png"
import i2 from "../../assets/images/i2.png"
import i3 from "../../assets/images/i3.png"
import i4 from "../../assets/images/i4.png"
const S2Services = () => {
    return (
        <>
            <div id="Service" className=" bg-black min-h-[90vh]" >
                <div className="min-h-fit    rounded-3xl py-10 w-full flex flex-col  ">

                    <div id=" ">
                        <div id="listing" className='   relative min-h-[30vh]   px-10 py-10 tablet:px-10     tablet:phone:px-5  flex flex-col gap-20'>


                            <div id="filler-main" className='flex justify-evenly    items-center z-10  w-full tablet:gap-10 tablet:flex-col    '>

                                <div data-aos="fade-left" id="filler-right" className='   w-[40%] flex flex-col justify-center   gap-10 tablet:gap-5 tablet:w-fit   '>
                                    <h2 className=" ilight   font-bold  text-gradient text-sm  tracking-[7px]  w-fit   tablet:phone:text-sm pointer-events-none uppercase " > our  Services </h2>
                                    <h1 /*data-aos="fade-up"*/ className='text-5xl   desktop:text-4xl ibold uppercase desktop:tablet:text-3xl  desktop:tablet:phone:text-2xl   leading-tight '>
                                        what we are <span className="border-b-2 border-[#8AFADE]    text-gradient  ">offering</span> <br />

                                    </h1>


                                    <div /*data-aos="fade-up"*/ className="   max-w-[30rem]   ">

                                        <p className="text-base leading-loose font-thin tablet:phone:text-sm  text-gray-300      tablet:phone:leading-relaxed">
                                            We offer a groundbreaking decentralized platform where you can achieve real financial growth. By using smart contracts, we guarantee automated and transparent rewards, ensuring a trustworthy and efficient system.

                                        </p>
                                        <br /><br />
                                        <p className="text-base leading-loose font-thin tablet:phone:text-sm  text-gray-300      tablet:phone:leading-relaxed">
                                            Our approach supports your financial freedom and encourages active participation. Join us for a unique opportunity to benefit both personally and as part of a thriving community.
                                        </p>
                                    </div>



                                </div>

                                <div data-aos="zoom-in" id="filler-left" className=' z-10   w-[50%]   h-[100%] flex justify-end tablet:w-[100%] tablet:phone:w-[100%]    tablet:justify-center '>
                                    <div className="flex justify-center gap-5 flex-wrap h-fit max-w-[35rem]">

                                        <div className=" bg-gradient-to-t from-[#132B26] to-[#0B0B0B] bg-[#121212] rounded-sm min-h-[12rem] max-w-[16rem] min-w-[10rem] p-5 ">
                                            <div className=" flex flex-col items-center gap-3 text-center" >
                                                <img src={i1} className=" w-[3rem]" alt="" />
                                                <h2 className=" text-xl font-bold" >Innovative  Blockchain Integration</h2>
                                                <p className=" text-base font-thin " >Transparent and secure transactions </p>
                                            </div>

                                        </div>
                                        <div className=" bg-gradient-to-t from-[#132B26] to-[#0B0B0B] bg-[#121212] rounded-sm min-h-[12rem] max-w-[16rem] min-w-[10rem] p-5 ">
                                            <div className=" flex flex-col items-center gap-3 text-center" >
                                                <img src={i2} className=" w-[3rem]" alt="" />
                                                <h2 className=" text-xl font-bold" > Community & Networking</h2>
                                                <p className=" text-base font-thin " >Inclusive and supportive member community  </p>
                                            </div>

                                        </div>
                                        <div className=" bg-gradient-to-t from-[#132B26] to-[#0B0B0B] bg-[#121212] rounded-sm min-h-[12rem] max-w-[16rem] min-w-[10rem] p-5 ">
                                            <div className=" flex flex-col items-center gap-3 text-center" >
                                                <img src={i3} className=" w-[3rem]" alt="" />
                                                <h2 className=" text-xl font-bold" >Flexible Income Opportunities
                                                </h2>
                                                <p className=" text-base font-thin " >Multiple income streams for diverse earnings
                                                </p>
                                            </div>

                                        </div>
                                        <div className=" bg-gradient-to-t from-[#132B26] to-[#0B0B0B] bg-[#121212] rounded-sm min-h-[12rem] max-w-[16rem] min-w-[10rem] p-5 ">
                                            <div className=" flex flex-col items-center gap-3 text-center" >
                                                <img src={i4} className=" w-[3rem]" alt="" />
                                                <h2 className=" text-xl font-bold" >Personal & Professional Growth
                                                </h2>
                                                <p className=" text-base font-thin " >Opportunities for leadership development
                                                </p>
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