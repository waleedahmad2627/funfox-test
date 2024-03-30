import React from 'react'
import funfox from '../assets/funfox.svg'
import week1 from '../assets/week1.svg'
import pencil from '../assets/pencil.svg'

const Border = () => {
    return (
        <div className="w-screen h-screen bg-[#F8D1E0]">
            <div className='flex'>
                <img src={funfox} alt="funfox" className="" />
                <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                    <img src={week1} alt="Logo" style={{ position: 'absolute', top: 0, left: 0,width: '100%', height: '100%' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '16px' }}>week 1</div>
                </div>
            </div>

            <div className='ml-8'>
                <img src={pencil} alt = "pencil" className="" />
                </div>

        </div>
    )
}

export default Border
