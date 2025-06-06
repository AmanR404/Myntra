import React from 'react'

const Footer = () => {
  return (
    <footer className='w-screen px-22 pt-26'>
      <div className='flex flex-col lg:flex-row flex-wrap gap-10 lg:gap-0'>
        <div className='flex w-screen lg:w-1/3'>
          <div className='w-1/2'>
            <ul className='flex flex-col gap-1 text-sm text-gray-800'>
              <li className='font-bold text-xs mb-2'>USEFUL LINKS</li>
              <a href="https://blog.myntra.com/"><li>Blog</li></a>
              <a href="https://careers.myntra.com/"><li>Careers</li></a>
              <a href="https://www.myntra.com/corp-info"><li>Corporate Information</li></a>
              <a href="https://www.myntra.com/security/whitehat"><li>Whitehat</li></a>
              <a href="https://www.cleartrip.com/"><li>Cleartrip</li></a>
            </ul>
          </div>
          <div className='w-1/2'>
            <ul className='flex flex-col gap-1 text-sm text-gray-800'>
              <li className='font-bold text-xs mb-2'>CUSTOMER POLICIES</li>
              <a href="https://www.myntra.com/contactus"><li>Contact Us</li></a>
              <a href="https://www.myntra.com/faqs"><li>FAQ</li></a>
              <a href="https://www.myntra.com/tac"><li>T&C</li></a>
              <a href="https://www.myntra.com/termsofuse"> <li>Terms Of Use</li></a>
              <a href="https://www.myntra.com/faqs#cancel"><li>Cancellation</li></a>
              <a href="https://www.myntra.com/privacypolicy"><li>Privacy Policy</li></a>
              <a href="https://www.myntra.com/grievanceredressal"><li>Grievance Redressal</li></a>  
            </ul>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between pr-20 lg:pr-0 w-screen lg:w-2/3'>
          <div className='flex flex-col gap-5 md:w-1/4'>
            <span className='font-bold text-xs text-gray-800'>EXPERIENCE MYNTRA APP ON MOBILE</span>
            <div className='flex w-full gap-2'>
              <a className='w-1/2' href="https://play.google.com/store/apps/details?id=com.myntra.android&pli=1"><img className='h-[40px]' src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" /></a>
              <a className='w-1/2' href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059"><img className='h-[40px]' src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" /></a>
            </div>
            <span className='font-bold text-xs text-gray-800'>KEEP IN TOUCH</span>
            <div className='flex w-1/4 gap-4'>
              <img className='w-[21px] h-[20px]' src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="" />
              <img className='w-[21px] h-[20px]' src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="" />
              <img className='w-[21px] h-[20px]' src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="" />
              <img className='w-[21px] h-[20px]' src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="" />
            </div>
          </div>
          <div>
            <div className='flex items-center w-[80%] mb-6 text-gray-900 text-sm'>
              <img className='w-[55px] h-[45px]' src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" />
              <span className='text-gray-700'><b>100% ORIGINAL</b> guarantee for all products at myntra.com</span>
            </div>
            <div className='flex items-center w-[80%] text-gray-900 text-sm'>
              <img className='w-[55px] h-[55px]' src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" alt="" />
              <span className='text-gray-700'><b> Return within 14days </b> of receiving your order</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-5 items-center md:gap-0 justify-between text-gray-700 mt-14 pr-10 pb-5 mb-5 border-b-2 border-gray-200'>
        <span>In case of any concern, Contact Us</span>
        <span>© 2025 www.myntra.com. All rights reserved.</span>
        <span>A Flipkart company</span>
      </div>
    </footer>
  )
}

export default Footer