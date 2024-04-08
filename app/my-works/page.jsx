'use client'
import React, { useState, useEffect } from 'react'
import { works, case_studies, web_design, my_playground } from '@/data'
import Image from 'next/image'
import Nav from '@/components/Nav'


const page = () => {
    const [current, setCurrent] = useState(works[1])
    const [display, setDisplay] = useState(case_studies)

    useEffect(() => {
        if (current == 'CASE STUDIES') {
            setDisplay(case_studies)
        } else if (current == 'WEB DESIGN') {
            setDisplay(web_design)
        } else if (current == 'MY PLAYGROUND') {
            setDisplay(my_playground)
        }
    }, [current]);

    return (
        <div className='hero h-full w-full text-white pt-[30px]'>
            <Nav />
            <div className='flex flex-row md:space-x-10 space-x-8 items-center justify-center mt-[5vh]'>
                <span className={`text-base text-secondary cursor-pointer ${current == works[0] && 'selected'}`} onClick={() => setCurrent(works[0])}>{works[0]}</span>
                <span className={`text-base text-secondary cursor-pointer ${current == works[1] && 'selected'}`} onClick={() => setCurrent(works[1])}>{works[1]}</span>
                <span className={`text-base text-secondary cursor-pointer ${current == works[2] && 'selected'}`} onClick={() => setCurrent(works[2])}>{works[2]}</span>
            </div>

            <div className='md:flex flex-row justify-between items-center py-10 px-[5.55vw]'>
                <div className='relative w-[43.6vw] h-[43.6vw] cursor-pointer'>
                    <Image src={display[0].webImage} fill className='brightness-75 hover:brightness-50 image' />
                    <div className='absolute bottom-6 left-6'>
                        <h1 className='text-[24px] uppercase tracking-wide'>{display[0].name}</h1>
                        <p className='text-base uppercase'>{display[0].sub}</p>
                    </div>
                </div>
                <div className='flex flex-col h-[43.6vw] justify-between'>
                    <div className='relative w-[43.6vw] h-[21.45vw] cursor-pointer'>
                        <Image src={display[1].webImage} fill className='brightness-75 hover:brightness-50 image' />
                        <div className='absolute bottom-6 left-6'>
                            <h1 className='text-[24px] uppercase tracking-wide'>{display[1].name}</h1>
                            <p className='text-base uppercase'>{display[1].sub}</p>
                        </div>
                    </div>
                    <div className='relative w-[43.6vw] h-[21.45vw] cursor-pointer'>
                        <Image src={display[2].webImage} fill className='brightness-75 hover:brightness-50 image' />
                        <div className='absolute bottom-6 left-6'>
                            <h1 className='text-[24px] uppercase tracking-wide'>{display[2].name}</h1>
                            <p className='text-base uppercase'>{display[2].sub}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page