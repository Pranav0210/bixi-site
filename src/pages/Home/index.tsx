import React from 'react';
import Illustration from '../../assets/rider.svg?react'
import Navbar from '../../components/Navbar';
import Fb from '../../assets/fb.svg?react'
import Ig from '../../assets/ig.svg?react'
import WhatsApp from '../../assets/whatsapp.svg?react'
import BlobBg from '../../assets/blobs-bg.png'
// import Linkedin from '../../assets/linkedin.svg?react'

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen grid grid-row">
        <Navbar />
        <div className="relative grid grid-cols-6 px-16 justify-items-start align-center max-w-100%">
          <div className='absolute right-12 bottom-12 z-5 flex flex-col gap-4 justify-end py-10 h-full'>
            <div className='rounded-full flex text-white w-7 h-7 bg-themeBlue hover:bg-backpack text-center cursor-pointer justify-center items-center content-center drop-shadow-3xl'>
              <Fb className='w-4 h-4 fill-white justify-self-center' />
            </div>
            <div className='rounded-full flex text-white w-7 h-7 bg-themeBlue hover:bg-backpack text-center cursor-pointer justify-center items-center content-center drop-shadow-3xl'>
              <Ig className='w-4 h-4 fill-white justify-self-center' />
            </div>
            <div className='rounded-full flex text-white w-7 h-7 bg-themeBlue hover:bg-backpack text-center cursor-pointer justify-center items-center content-center drop-shadow-3xl'>
              <WhatsApp className='w-4 h-4 fill-white justify-self-center' />
            </div>
            {/* <div className='rounded-full flex text-white w-7 h-7 bg-themeBlue hover:bg-backpack text-center cursor-pointer justify-center items-center content-center drop-shadow-3xl'>
              <Linkedin className='w-4 h-4 fill-white justify-self-center' />
            </div> */}
          </div>
          <div className='col-span-2 !justify-start text-left'>
            <div className='text-[8rem] align-items-start text-themeBlue -ml-2 font-titleHans'>Bixi</div>
            <div className="text-backpack text-[2rem] -mt-10">Favourite Rentals in Budget</div>
            <div className='text-left pt-6 pr-6'>
              Experience the convenience and affordability of our electric scooter rentals.
              Enjoy flexible, short-term rentals starting from just an hour, perfect for quick city trips.
              Save money and the environment with our eco-friendly, budget-friendly EV scooters, offering a cleaner and cheaper alternative to petrol-based vehicles
            </div>
            <div className='flex flex-col mt-10 w-fit'>
              <div className='flex gap-6 font-semibold w-fit'>
                <div className='bg-backpack text-white px-6 py-2 rounded-md text-lg cursor-pointer drop-shadow-2xl'>
                  Book Now
                </div>
                <div className='bg-backpack text-white px-6 py-2 rounded-md text-lg cursor-pointer drop-shadow-2xl'>
                  Lend Now
                </div>
              </div>
            </div>
          </div>
            <Illustration className="h-[560px] col-span-4 align-item-start justify-self-end" />
        </div>
      </div>
      <div>
        <main className="flex-1 flex flex-col items-center justify-center px-28 m-6">
          <section className="text-center p-8 bg-none bg-opacity-75 rounded-2xl relative w-full">
            <div className='flex justify-around'>
            <img src={BlobBg} alt="Bixi Logo" className="h-[100px]" />
            <img src={BlobBg} alt="Bixi Logo" className="h-[100px]" />
            <img src={BlobBg} alt="Bixi Logo" className="h-[100px]" />
            </div>
            <div className='absolute inset-0 flex justify-around h-fit pt-12'>
              <div className='font-cabinSketch text-[3rem]'>.5000+</div>
              <div className='font-cabinSketch text-[3rem] -ml-12'>.13k+</div>
              <div className='font-cabinSketch text-[3rem] -ml-6'>.200k+</div>
            </div>
            <div className='inset-0 grid grid-cols-3 gap-6 justify-around p-4'>
              <div className='font-dosisBody text-md text-wrap'>Happy Unique customers we have acquired in the last one year. We believe in customer reviews and strive towards providing the best vehicles to drive!</div>
              <div className='font-dosisBody text-md'>Total rides we have completed on the roads of Bubaneswar. Bixi loves it here and don't we all? Don't worry if we're not in your town yet, we'll soon be :P</div>
              <div className='font-dosisBody text-md'>Website visits and impressions for lenders and riders altogether. We know you've seen us! It's time you pick your mood and put some miles on it?</div>
            </div>
            {/* <h2 className="text-3xl font-semibold mb-4">Discover Our Features</h2> */}
            {/* <p className="text-lg text-gray-700 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula,
              nunc sit amet tincidunt gravida, metus lorem facilisis metus, a gravida
              sapien arcu at justo.
            </p> */}
          </section>
          {/* <section className="w-full flex flex-wrap justify-around mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md w-64 mb-6 bg-opacity-75">
            <h3 className="text-xl font-bold mb-2">Feature One</h3>
            <p className="text-gray-700">Description of feature one.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-64 mb-6 bg-opacity-75">
            <h3 className="text-xl font-bold mb-2">Feature Two</h3>
            <p className="text-gray-700">Description of feature two.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-64 mb-6 bg-opacity-75">
            <h3 className="text-xl font-bold mb-2">Feature Three</h3>
            <p className="text-gray-700">Description of feature three.</p>
            </div>
            </section> */}
            <button className="px-6 py-3 mt-10 bg-themeBlue text-white rounded-full hover:bg-backpack hover:border-backpack">
              Get Started
            </button>
        </main>
        <footer className="w-full bg-themeBlue py-4 text-white text-center bg-opacity-75">
          <p>&copy; 2024 Bixi Mobility Services Pvt. Ltd. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
