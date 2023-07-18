import React, { useEffect, useState } from 'react'
import img from "./assests/img.png"

function Hero() {
 
  return (
    <section class="text-gray-600 body-font px-0 md:px-24 lg:px-24 sm:px-24 2xl:px-24 md:py-12 lg:py-12 sm:py-11 2xl:py-11 ">
    <div class="container bg-blue-300  mx-auto flex px-10 md:py-11 lg:py-11 sm:py-11 2xl:py-11 md:flex-row flex-col items-center  md:rounded-2xl 2xl:rounded-2xl lg:rounded-2xl">
      <div class="my-5 pl-4 lg:flex-grow md:w-2/5 lg:pr-5 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-black">Get your dream job
          <br class="hidden lg:inline-block font-bold"/>Or hire 
          <br class="hidden lg:inline-block font-bold"/> skilled employee
        </h1>
        <div className="stacks my-4 mb-10 flex gap-4">
            <div className="flex flex-col gap-2 border-r-2 border-gray-600 pr-8">
                <div className="text-3xl font-medium text-gray-700">150+</div>
                <div className="text-md font-medium text-gray-700">Registered Candidate</div>
            </div>
            <div className="flex flex-col gap-2 pl-8">
                <div className="text-3xl font-medium text-gray-700">100+</div>
                <div className="text-md font-medium text-gray-700">Company</div>
            </div>
        </div>
        <div class="flex justify-center mb-6">
        <div class="flex items-center max-w-md mx-auto bg-white rounded-lg " x-data="{ search: '' }">
        <div class="w-full">
            <input type="search" class="md:w-80 lg:w-80  sm:w-80 2xl:w-80  px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                placeholder="search" x-model="search"/>
        </div>
        <div>
            <button type="submit" class="flex items-center bg-blue-500 justify-center w-10 h-10 text-white rounded-r-lg">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
        </div>
    </div>
      </div>
      </div> 
<div className="pt-40 hidden md:inline lg:inline sm:hidden"> 
 <svg xmlns="http://www.w3.org/2000/svg" width="150" height="80" viewBox="0 0 184 87" fill="none">
<path d="M2.15951 36.0588C3.57972 22.1631 3.02297 4.58497 20.1626 2.13229C28.3069 0.966842 38.6411 9.4327 41.1549 16.5495C43.24 22.4529 47.9372 29.0267 43.5371 35.1378C40.0809 39.9379 34.0251 42.0545 28.4936 39.2748C12.7852 31.3809 28.3569 14.4894 38.7205 12.2945C52.8661 9.2987 81.8699 35.3336 74.8963 50.4526C68.9171 63.4156 56.7363 52.6515 60.1164 41.7339C64.8712 26.376 73.5221 22.2556 89.8024 29.5491C102.514 35.2438 106.999 52.968 103.722 64.7013C103.041 67.1382 103.02 82.1683 101.159 81.4575C82.8028 74.4438 97.8965 46.0985 111.806 43.2661C127.787 40.0117 143.994 36.9012 158.673 44.3771C166.566 48.3973 185.763 66.6456 180.521 59.5053C173.96 50.5695 165.913 37.8985 165.802 26.2532C165.768 22.788 165.395 11.7251 166.223 22.2642C167.076 33.1182 167.574 42.6987 170.297 52.6744C170.903 54.8944 174.897 56.7038 176.587 58.084C178.018 59.253 171.063 59.9374 170.299 60.1744C163.696 62.2202 158.958 67.1249 154.835 72.4669C151.155 77.2349 147.787 84.6695 143.371 84.4252" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
    
      <div class="hidden md:inline lg:inline sm:hidden w-5/12">
      
            <svg className='mb-' xmlns="http://www.w3.org/2000/svg" width="379" height="324" viewBox="0 0 459 374" fill="none">
  <g filter="url(#filter0_d_14_193)">
    <path d="M4.5 186C4.5 75.5431 94.0431 -14 204.5 -14H254.5C364.957 -14 454.5 75.5431 454.5 186V186V386H204.5C94.043 386 4.5 296.457 4.5 186V186Z" fill="white"/>
   
  </g>
  
  
</svg>
<img class="-mt-[22rem] ml-12    rounded-xl 1 h-72 w-72" alt="hero" src={img}/>
      
      </div>
     <div className="-ml-16 -mt-60 hidden md:inline lg:inline sm:hidden"> <svg  xmlns="http://www.w3.org/2000/svg" width="90" height="150" viewBox="0 0 90 176" fill="none">
  <path d="M2.71253 3.45809C33.8814 10.7611 28.1791 8.8238 52.4497 28.3829C57.9929 32.8501 66.4402 38.6547 68.0203 44.7901C70.352 53.8443 50.7384 75.4277 39.704 63.5084C32.5728 55.8053 34.749 45.7162 46.4271 45.4662C65.5785 45.0563 79.7992 61.6993 84.856 74.5055C90.4232 88.6044 84.0452 101.312 68.2617 106.479C61.0513 108.839 49.9754 104.646 56.6878 97.761C70.4941 83.5986 83.6825 107.299 80.9249 118.106C75.9581 137.57 44.0603 157.613 16.2346 147.271C7.53469 144.038 10.6122 141.723 14.4524 140.351C18.3492 138.958 28.3215 132.946 25.582 135.457C20.7927 139.847 15.0382 140.779 8.55867 142.558C0.201336 144.853 16.9101 157.483 21.7093 161.738C24.2286 163.971 27.7986 168.522 28.3235 171.384C29.3599 177.035 20.1709 160.858 18.7172 155.213" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
    </div>
  
  </section>
  )
}

export default Hero