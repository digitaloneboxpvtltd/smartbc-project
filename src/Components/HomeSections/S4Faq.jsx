import { useState } from 'react'

const S4Faq = () => {
    const [activeAccordion, setActiveAccordion] = useState();


    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };


    const accordionItems = [
        {
            question: ' Q1.  What is Smart BC Concept ? ',
            answer: (
                <div className='' >
                    <p className="mb-2 text-gray-300 ">
                        Smart BC Concept" is the world's first smart BC ( Business Community) contract, designed as an international community within a global decentralized ecosystem. It operates on a self-executing software algorithm that distributes rewards among community members based on specific conditions. This innovative model ensures that all participants have the opportunity to earn money, creating a fair and inclusive environment where everyone benefits from the system's rewards.


                    </p>
                </div>
            ),
        },
        {
            question: '  Q2. Who created the Smart BC concept?',
            answer: (
                <div className='' >
                    <p className="mb-2 text-gray-300 ">
                        The "Smart BC Concept" model belongs to a group of enthusiasts who are members of the community and don’t have any special privileges. Today, "Smart BC Concept" is a peer-to-peer community of platform members, to whom the platform itself belongs.

                    </p>

                </div>
            ),
        },
        {
            question: '  Q3. Who manages the platform? ',
            answer: (
                <div className='' >
                    <p className="mb-2 text-gray-300 ">

                        In the Smart BC Concept ecosystem, the platform is managed collectively by all participants. It's designed as a decentralized system, meaning there isn't a single central authority. Instead, decisions about how the platform operates are typically made based on the principles and rules set out in the system. This approach ensures that everyone within the community has an equal role in managing and shaping the platform's direction and activities.

                    </p>
                </div>
            ),
        },
        {
            question: '  Q4. How does Smart BC Concept handle funds and ensure the security of my income  ?',
            answer: (
                <div className='' >
                    <p className="mb-2 text-gray-300 ">
                        Smart BC Concept does not hold any funds, so the balance of the smart contract is equal to zero. You can check this yourself by following the link. Your income comes instantly from your partners, directly to your personal wallet. Only you have access to your wallet, and no one else can manage your money.

                    </p>
                </div>
            ),
        },
        {
            question: '  Q5. Is there any risk in the Smart BC Concept? ',
            answer: (
                <div className='' >
                    <p className="mb-2 text-gray-300 ">
                        Like any financial system, there are some risks associated with Smart BC Concept. In decentralized systems, you are responsible for the security of your wallet and private keys, as they are entirely under your control. If you lose your private key or give someone access to it, your funds could be lost. Therefore, you should always be mindful of your security and conduct transactions only with trusted sources.

                    </p>
                </div>
            ),
        },
        {
            question: '  Q6. Are there any risks associated with the Smart BC Concept platform? ',
            answer: (
                <div className='' >
                    <p className="mb-2 text-gray-300 ">
                        There are no significant risks associated with the Smart BC Concept platform. Your initial investment can be recovered with just four referrals. It operates on a blockchain smart contract with transparent operations. All earnings go directly to your personal wallet, ensuring immediate access. Remember, protecting your wallet and private keys is vital for security.
                    </p>
                </div>
            ),
        },
        {
            question: '  Q7. What is Decentralization? ',
            answer: (
                <div className='' >
                    <p className="mb-2 text-gray-300 ">

                        Decentralization means spreading control and decision-making away from one central authority. In blockchain, this creates networks where no single party has all the power, leading to greater transparency, security, and trust among participants.


                    </p>
                </div>
            ),
        },
        {
            question: '  Q8. How long will it take to receive BC rewards?',
            answer: (
                <div className='' >
                    <p className="mb-2 text-gray-300 ">

                        The time it takes to receive BC rewards depends entirely on the growth of the community. As the community grows, BC rewards are distributed. This process can vary in speed, so please be patient and understand that it may take time as it's a community-driven process.

                    </p>
                </div>
            ),
        },
        {
            question: '  Q9. Is It Necessary to Have Direct Joining to Receive BC Rewards? ',
            answer: (
                <div className='' >
                    <p className="mb-2 text-gray-300 ">
                        No, direct joinings are not required to receive BC rewards. BC rewards are distributed based on global community growth, so your rewards depend on the overall participation in the platform, not just your direct referrals.

                    </p>
                </div>
            ),
        },
        {
            question: "  Q10. What if I can't make any referrals? Can I still earn money?",
            answer: (
                <div className='' >
                    <p className="mb-2 text-gray-300 ">
                        Absolutely! Even if you can't make referrals, you can still earn money with the Smart BC Concept platform. Once you buy a slot, you'll automatically start receiving BC rewards, regardless of whether you refer anyone. So, your investment can grow, and you can earn profits without needing to bring others on board.

                    </p>
                </div>
            ),
        },


    ];



    return (


        <>
            <div id='FAQ' className=' relative ' >

                <div className='   ' >

                    <div className='flex       flex-col gap-10 py-10 '>
                        <div data-aos="zoom-in" className=" text-center px-5 flex flex-col justify-center items-center gap-7 ">
                            <div className="flex justify-center  ">

                                <h2 className=" ilight   font-bold  text-gradient text-sm  tracking-[7px]  w-fit   tablet:phone:text-sm pointer-events-none uppercase " > questions asked more</h2>

                            </div>
                            <h1 /*data-aos="fade-up"*/ className='text-5xl   desktop:text-4xl ibold uppercase desktop:tablet:text-3xl  desktop:tablet:phone:text-2xl   leading-tight '>
                                Frequently Asked <span className="border-b-2 border-[#8AFADE]    text-gradient  ">Question</span> <br />

                            </h1>
                            <p className=' max-w-[35rem] leading-relaxed ' >Find answers to common questions about our services, policies, and more in our comprehensive Frequently Asked Questions (FAQ) section. </p>

                        </div>

                        <div className=' flex flex-col gap-10 '>

                            {/* faq 1  */}
                            <div className='z-10 flex flex-col items-center' >
                                <div className='md:w-[60%]     w-[90%] rounded-t-xl ' id="accordion-collapse" data-accordion="collapse">
                                    {accordionItems.map((item, index) => (
                                        <div data-aos="zoom-in" key={index}>
                                            <h2 id={`accordion-collapse-heading-${index + 1}`}>
                                                <button
                                                    type="button"
                                                    className={`flex items-center justify-between w-full px-5 py-3 my-5 rounded-sm font-medium rtl:text-right text-gray-300   border-t-2 border-b-2   border-[#8AFADE]      focus:bg-transparent    gap-3 ${activeAccordion === index ? 'active' : ''
                                                        }`}
                                                    onClick={() => toggleAccordion(index)}
                                                    aria-expanded={activeAccordion === index ? 'true' : 'false'}
                                                    aria-controls={`accordion-collapse-body-${index + 1}`}
                                                >
                                                    <span className=' font-medium text-xl text-white text-left' >{item.question}</span>
                                                    <svg
                                                        data-accordion-icon
                                                        className="w-3 h-3 rotate-180 shrink-0"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 10 6"
                                                    >
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                                    </svg>
                                                </button>
                                            </h2>
                                            <div
                                                id={`accordion-collapse-body-${index + 1}`}
                                                className={`p-5 text-base rounded-sm rounded-b-xl  border border-t-0 border-[#8AFADE]  ${activeAccordion === index ? 'block' : 'hidden'
                                                    }`}
                                                aria-labelledby={`accordion-collapse-heading-${index + 1}`}
                                            >
                                                {item.answer}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default S4Faq