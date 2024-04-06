'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navItems } from '@/data'
import { usePathname } from 'next/navigation'

const Nav = () => {
    const [dropdown, setDropdown] = useState(false);
    const pathname = usePathname();

    const handleClick = () => {
        setDropdown((oldDropdown) => !oldDropdown)
    }

    return (
        <nav className='navbar flex justify-between flex-row items-center px-[5.55vw]'>
            <Image src='/assets/UDOKA.svg' alt='Udoka' width={108} height={52} />
            <div className='flex-row items-center space-x-10 justify-between hidden md:flex'>
                {
                    navItems.map((item) => (
                        <div key={item.name} className='relative'>
                            <Link href={item.link} className={`${pathname == item.link ? 'active text-white font-semibold' : 'text-secondary'} nav-link font-[24px]`}>
                                {item.name}
                            </Link>

                        </div>
                    ))
                }
            </div>
            <button className='hidden button md:flex'>CONTACT ME</button>
            <Image className='md:hidden flex fixed right-[5.55vw] z-20' onClick={handleClick} src={dropdown ? '/assets/close.svg' : '/assets/menu.svg'} alt='menu' width={24} height={24} />

            {/* MobileNav */}
            <div className={`md:hidden ${dropdown ? 'h-[60vh] shadow-sm' : 'h-[0px]'} flex flex-col justify-center fixed top-[0px] left-0 right-0 bg-primary-green z-10 `}>
                <div className={`${dropdown ? 'flex' : 'hidden'} flex-col justify-center items-center py-4 space-y-8`}>
                    {
                        navItems.map((item) => (
                            <div key={item.name} className='relative'>
                                <Link href={item.link} className={`${pathname == item.link ? 'text-white font-semibold' : 'text-secondary'} nav-link font-[32px]`}>
                                    {item.name}
                                </Link>

                            </div>
                        ))
                    }
                </div>
                <button className={`${dropdown ? '' : 'hidden'} button self-center mt-8`}>CONTACT ME</button>

            </div>
        </nav>
    )
}

export default Nav