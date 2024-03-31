import React from 'react'
import seaview from '../assets/seaview.svg'
import scaryhouse from '../assets/scaryhouse.svg'
import hintImages from '../assets/hintImages.svg'
import clock from '../assets/clock.svg'
import home from '../assets/home.svg'

const SecondPage = () => {
    return (
        <div style={{ fontFamily: "'Short Stack', sans-serif" }} className='absolute inset-0 mt-20 flex justify-center bg-[#FFFFFF]'>
            <div className='w-[1065px] h-[750px] bg-[#F7F9FE] rounded-3xl'>
                <div
                    className="font-normal text-[#1E242F] ml-4 mt-4"
                    style={{
                        fontSize: '32px',
                        lineHeight: '39.41px',
                        padding: '8'
                    }}
                >
                    Can you figure out the definition of setting from the following examples?
                </div>

                <div
                    className="font-normal text-[#1E242F] ml-4 mt-3"
                    style={{
                        fontSize: '24px',
                        lineHeight: '29.55px',
                        padding: '8'
                    }}
                >
                    (take a minute to think about this)
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 px-32">
                    <div className="flex flex-col justify-center items-center">
                        <div style={{
                            background: '#FFFFFF',
                            border: "3px dashed rgba(204, 204, 204, 1)",
                            boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.1)',
                            borderRadius: '10px',
                            padding: '0.5rem'

                        }}>

                            <img src={seaview} className="mx-3 my-2" alt="Second" />
                        </div>

                        <div className='text-[20px] leading-[29px] font-normal' >Sunny day at a beach</div>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <div style={{
                            background: '#FFFFFF',
                            border: "3px dashed rgba(204, 204, 204, 1)",
                            boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.1)',
                            borderRadius: '10px',
                            padding: '0.5rem'

                        }}>

                            <img src={scaryhouse} className="mx-3 my-2" alt="Second" />
                        </div>
                        <div className='text-[20px] leading-[29px] font-normal'>A cold rainy night in a
                            haunted house in October</div>
                    </div>
                </div>

                <div>
                    <h1 className='ml-4 text-[20px] leading-[29px] mt-8 font-normal'>So, what do you think the definition of setting is?

                    </h1>
                </div>

                <div className='flex'>
                    <div className='mt-4 text-[20px] leading-[29px] ml-4 font-normal'>Any guesses?</div>
                    <div className='mt-4 ml-4 ' style={{
                        background: '#FFFFFF',
                        border: "3px dashed rgba(204, 204, 204, 1)",
                        boxShadow: 'inset 0px 0px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px',
                        padding: '0.5rem',
                    }}>
                        <h1 style={{
                            background: 'background: rgba(182, 182, 182, 1)'
                        }} className='text-[20px] leading-[29px] font-normal'> ____________________________________________

                        </h1>
                    </div>

                    <div className='text-[20px] font-normal leading-[29px] mt-6 mr-2 ml-8'>Hint: </div>
                    <img src={hintImages} alt="" />
                </div>

                <div
                    style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
                    className="bg-[#25A3A1] border-[3px] border-dashed mt-3 mx-5 border-[#A4FDFB] p-2 relative"
                >
                    <p className="text-white text-[24px] inline-block leading-[33px] font-[400] tracking-[-6%] ">
                        Setting is the time <img src= {clock} className='inline'/> and place  <img src={home} className='inline' alt="" />   <p className='inline'>of a story. It often answers the questions: when? and where?</p>
                    </p>

                </div>

                <div className='mt-8 px-7 text-[20px] leading-[24.63px] font-normal'>
                    The time of the story could be in the past, future, day, night, summer or winter.
                    A story may take place in a school, a mall, a desert, an airplane or in a variety
                    of other places.
                </div>

            </div>

        </div>
    )
}

export default SecondPage