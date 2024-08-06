import React from "react"
import BixiLogo from '../assets/bixi-logo-themeBlue.png'

const Navbar: React.FC = () => {

    return (
        <div className="grid grid-cols-2 w-full h-min p-10 m-0">
            <div className="justify-self-start content-center">
                <img src={BixiLogo} alt="Bixi Logo" className="h-[20px] pl-7" />
                {/* <BixiLogo className="h-[20px] align-item-start justify-self-end fill-current text-themeBlue"/> */}
            </div>
            <div className="grid grid-flow-col gap-2 justify-stretch">
                <div className="text-lg justify-self-center border-2 font-semibold border-white hover:border-themeBlue rounded-full px-4 text-themeBlue cursor-pointer">
                    Home
                </div>
                <div className="text-lg justify-self-center font-semibold text-themeBlue border-2 border-white hover:border-themeBlue rounded-full px-4 cursor-pointer">
                    About
                </div>
                <div className="text-lg justify-self-center font-semibold text-themeBlue border-2 border-white hover:border-themeBlue rounded-full px-4 cursor-pointer">
                    Service
                </div>
                <div className="h-fit text-lg justify-self-center font-semibold text-themeBlue border-2 border-white hover:border-themeBlue rounded-full px-4 cursor-pointer">
                    Contact
                </div>
                <div className='flex gap-6 font-semibold w-fit'>
                    <div className='px-6 py-1 bg-themeBlue text-white rounded-full hover:bg-backpack hover:border-backpack cursor-pointer'>
                        Login
                    </div>
                    <div className='px-6 py-1 bg-themeBlue text-white rounded-full hover:bg-backpack hover:border-backpack cursor-pointer'>
                        Sign Up
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;