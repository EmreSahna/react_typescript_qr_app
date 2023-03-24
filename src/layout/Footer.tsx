import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-main-100 w-full py-[60px] border-t border-main-400 '>
      <div className='container mx-auto flex justify-between font-staatliches text-[18px]'>
      <div className='w-[25%]'>
        <h3 className="self-center text-[32px] font-semibold whitespace-nowrap text-main-300 font-staatliches">QuickPayr</h3>
        <p className='text-white font-staatliches mt-[10px] text-[18px]'>
          QuickPayr is a payment gateway that allows you to accept payments from your customers.
        </p>
        <ul className='text-white mt-[10px] flex justify-start gap-[10px]'>
          <li className='mt-[10px]'>
            <a href='#' className='text-white flex items-center gap-[3px] bg-main-300 p-1 rounded-[50%]'>
              <img src="./facebook.svg" className='w-[36px]' alt="" />
            </a>
          </li>
          <li className='mt-[10px]'>
            <a href='#' className='text-white flex items-center gap-[3px] bg-main-300 p-1 rounded-[50%]'>
              <img src="./twitter.svg" className='w-[36px]' alt="" />
            </a>
          </li>
          <li className='mt-[10px]'>
            <a href='#' className='text-white flex items-center gap-[3px] bg-main-300 p-1 rounded-[50%]'>
              <img src="./instagram.svg" className='w-[36px]' alt="" />
            </a>
          </li>
          <li className='mt-[10px]'>
            <a href='#' className='text-white flex items-center gap-[3px] bg-main-300 p-1 rounded-[50%]'>
              <img src="./linkedin.svg" className='w-[36px]' alt="" />
            </a>
          </li>
        </ul>
      </div>

      <div className='w-[20%]'>
        <h3 className='font-semibold text-main-300 text-[20px]'>Quick Links</h3>
        <ul className='text-white font-staatliches mt-[10px]'>
          <li className='mt-[10px]'>
            <a href='#' className='text-white flex items-center'>
              <span className="material-icons text-main-300">
                keyboard_arrow_right
              </span>
              Home
            </a>
          </li>
          <li className='mt-[10px]'>
            <a href='#' className='text-white flex items-center'>
              <span className="material-icons text-main-300">
                keyboard_arrow_right
              </span>
              Market
            </a>
          </li>
          <li className='mt-[10px]'>
            <a href='#' className='text-white flex items-center'>
              <span className="material-icons text-main-300">
                keyboard_arrow_right
              </span>
              About Us
            </a>
          </li>
          <li className='mt-[10px]'>
            <a href='#' className='text-white flex items-center'>
              <span className="material-icons text-main-300">
                keyboard_arrow_right
              </span>
              F.A.Q
            </a>
          </li>
        </ul>
      </div>

      <div className='w-[20%]'>
        <h3 className='font-semibold text-main-300 text-[20px]'>Contact Us</h3>
        <ul className='text-white font-staatliches mt-[10px]'>
          <li className='mt-[10px]'>
            <a href='#' className='text-white flex items-center gap-[10px]'>
              <span className="material-icons text-white bg-main-300 rounded-[50%] p-1">
                phone
              </span>
              +90 (113) 456 7890
            </a>
          </li>
          <li className='mt-[10px]'>
            <a href='#' className='text-white flex items-center gap-[10px]'>
              <span className="material-icons text-white bg-main-300 rounded-[50%] p-1">
                email
              </span>
              info@quickpayr.com
            </a>
          </li>
          <li className='mt-[10px]'>
            <a href='#' className='text-white flex items-center gap-[10px]'>
              <span className="material-icons text-white bg-main-300 rounded-[50%] p-1">
                location_on
              </span>
              9394 Union Street
              Willingboro, NJ 08046
            </a>
          </li>
        </ul>
      </div>
      </div>
    </footer>
  )
}
