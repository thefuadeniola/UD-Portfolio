import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="hero h-screen flex flex-col items-center justify-center text-white pt-[30px]">
      <h1 className='uppercase hidden md:flex text-[48px]'>Onwuachumba Udoka</h1>
      <h1 className='flex flex-col justify-center items-center md:hidden text-[24px] font-semibold space-y-1'>
        <span>ONWUACHUMBA</span>
        <span>UDOKA</span>
      </h1>
      <p className='text-base md:text-[24px] mt-[24px]'>is an ever evolving UI/UX designer.</p>
      <p className='text-secondary text-sm md:text-[16px] mt-[16px] md:mt-[24px] font-light'>Moving Pixels | Building Solutions</p>
      <div className='flex flex-col md:flex-row items-center mt-[32px] md:mt-[48px]'>
        <button className='button md:mb-0 mb-[20px] md:mr-[60px]'>ABOUT UD</button>
        <Link href='/my-works' className='button flex'>
          <span>EXPLORE</span>
        </Link>
      </div>
    </main>
  );
}
