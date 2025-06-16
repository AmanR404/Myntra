import React from 'react'

const Success = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-8 mt-10 pb-50'>
        <span>Order #342398</span>
        <span className='font-bold text-4xl'>THANK YOU!</span>
        <p className='w-[60%] sm:w-1/3'>We’ve received your order! We know you’re going to love it. You’ll receive another text when your order ships. </p>
        <img className='w-20 h-22' src="https://media.istockphoto.com/id/1416145560/vector/green-circle-with-green-tick-flat-ok-sticker-icon-green-check-mark-icon-tick-symbol-in-green.jpg?s=612x612&w=0&k=20&c=Uh3KS7c_o5QmrfisyV-aRzDUNqtAM7QUVJrc8bniVsQ=" alt="" />
    </section>
  )
}

export default Success