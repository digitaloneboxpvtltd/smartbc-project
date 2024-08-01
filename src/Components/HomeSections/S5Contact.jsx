import React from 'react'

import baloon from "../../assets/images/contactimg.png"

const S5Contact = () => {
    return (
        <>
            <div id='Contact' className=" min-h-[90vh]  bg-[#121212]  py-10 w-full flex flex-col  ">

                <div className=" flex tablet:flex-col-reverse tablet:items-center justify-evenly">

                    <div className="max-w-[30rem] h-full   flex items-center  p-5">

                        <div data-aos="zoom-in" className="bg-[#79D8C1] bg-opacity-10 rounded-lg  flex flex-col gap-5   p-10 phone:px-5 text-gray-200">
                            <h1 /*data-aos="fade-up"*/ className='text-3xl   desktop:text-2xl ibold uppercase desktop:tablet:text-xl     leading-tight '>
                                How it <span className="border-b-2 border-[#8AFADE]    text-gradient  "> Works</span> <br />

                            </h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At inventore illo pariatur dolor laborum repellat.</p>

                            <div>
                                <form>
                                    <input
                                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="First Name"
                                        name="name"
                                    />

                                    <input
                                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Last Name"
                                        name="Lname"
                                    />

                                    <input
                                        className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                    />

                                    <textarea
                                        className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Type your message here..."
                                        name="message"
                                        style={{ height: 121 }}
                                        defaultValue={""}
                                    />

                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            target="blank"
                                            className="rbtn rounded-[8px]"
                                        >
                                            <span className="text rounded-[7px] px-5 py-3 ">Send</span>
                                        </button>
                                         
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div  className=' flex items-center' >
                        <img data-aos="zoom-in-up" src={baloon} className=' w-[35rem]' alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default S5Contact