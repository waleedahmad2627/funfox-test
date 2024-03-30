import React from 'react'
import funfox from '../assets/funfox.svg'
import week1 from '../assets/week1.svg'
import bag from '../assets/bag.svg'
import pencil from '../assets/pencil.svg'
import openbook from '../assets/openbook.svg'
import closebook from '../assets/closebook.svg'
import cap from '../assets/cap.svg'
import scale from '../assets/scale.svg'
import footer from '../assets/footer.svg'
import FirstPage from './FirstPage'

const Border = () => {
    return (
        <div className="w-screen h-screen bg-[#F8D1E0]">
            <div className='flex'>
                <img src={funfox} alt="funfox" className="" />
                <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                    <img src={week1} alt="Logo" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '16px' }}>week 1</div>
                </div>
            </div>

            <div className='ml-8'>
                <img src={pencil} alt="pencil" className="" />
            </div>
            <div
                className="bg-cover bg-center w-24 h-24 ml-4 rounded-full flex justify-center items-center absolute top-1/2 left-0 transform -translate-y-1/2"
                style={{ backgroundImage: `url(${bag})` }}
            >
            </div>
            <div
                className="ml-4 mb-16 absolute bottom-0 left-0
                 w-16 h-16 lg:w-24 lg:h-24
                 bg-no-repeat bg-center bg-cover
                 flex justify-center items-center"
                style={{ backgroundImage: `url(${openbook})` }} >

            </div>

            <div
                className="bg-cover bg-center w-24 h-24 mr-4 rounded-full flex justify-center items-center absolute top-1/2 right-0 transform -translate-y-1/2"
                style={{ backgroundImage: `url(${closebook})` }}
            >
            </div>


            <div
                className="mr-4 mb-16 absolute bottom-0 right-0
                 w-16 h-16 lg:w-24 lg:h-24
                 bg-no-repeat bg-center bg-cover
                 flex justify-center items-center"
                style={{ backgroundImage: `url(${cap})` }} >

            </div>


            <div
                className="absolute top-0 right-0 transform -translate-x-1/2 translate-y-1/2
                 w-16 h-16 lg:w-24 lg:h-24
                 bg-no-repeat bg-center bg-cover
                 flex justify-center items-center
                 "
                style={{ backgroundImage: `url(${scale})` }}
            >

            </div>

            <div className="absolute inset-x-0 bottom-0 flex justify-center mb-8">
                <img src={footer} alt="footer" />
            </div>
        </div>
    )
}

export default Border
