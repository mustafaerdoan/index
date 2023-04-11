import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className="flex flex-col lg:flex-row justify-start  lg:justify-between items-center gap-5">
            <img src="/assets/ec.svg" alt="logo" />
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                
                <p>About Us</p>
                <p>Find FM Suppliers</p>
                <p>Find FM Clients</p>
                <p>Pricing</p>
                <p>Jobs</p>
               
            </div>
            <button className='btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Navbar