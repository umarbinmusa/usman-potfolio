import React from 'react'
import logo from "../assets/images/ussu.png"
import bg from "../assets/images/bg.jpg"
import Navbar from './Navbar'
import "../styles.css"

function Header() {
  return (
   <>
   <div id='home' className=' bg-center bg-black bg-no-repeat h-screen flex flex-col '>
    <Navbar/>
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">
    
        <h1 className='text-white text-5xl font-bold'>Hi! I'm Usman</h1>
        <p className='text-white py-4 max-w-lg text-lg font-bold '> a passionate networker dedicated to bridging connections and fostering collaborations in the ever-evolving landscape of networking. With a profound belief in the power of relationships and the synergy they create, I thrive on building meaningful connections that transcend boundaries.</p>
        <button className='  text-white text-2xl'>Let's Connect <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i> </button>
      </div>
      
      <div className=" flex ">
     
      <img className='w-96 ast-img' src={logo} alt="" />
      </div>
   
    </div>
   </div>
   </>
  )
}

export default Header