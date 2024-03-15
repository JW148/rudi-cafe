import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import ContactForm from './contact-form';

export default function Footer() {
  return (
    <section className='mt-20 bg-rudi-green grid grid-cols-1 lg:grid-cols-3 gap-4'>
        
        {/* Opening hours, hours opened and Facebook Link */}
        <div className='text-center flex flex-col items-center pb-10'>

          <header className='font-bold text-white p-16 text-xl'>
            OPENING TIMES
          </header>

          <div className='pb-6 text-left'>
              <p className='text-white font-bold xl:text-base lg:text-lg md:text-xl sm:text-2xl'>
                  Monday - Friday, 8:30&nbsp;am – 2&nbsp;pm
                </p>
                <p className='text-white font-bold xl:text-base lg:text-lg md:text-xl sm:text-2xl'>
                  Saturday&nbsp;-&nbsp;Sunday&nbsp;,&nbsp;Closed
                </p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='text-white font-bold xl:text-base lg:text-lg md:text-xl sm:text-2xl'>
              Find us at:&nbsp;
            </p>

            <a href="#" className="pl-2 text-white">
                <FaFacebook className='size-8'/>
              </a>
          </div>
        </div>

        {/* Logo, Location address and Map */}
        <div className='text-center flex flex-col items-center pb-10'>
          
          <header className="px-12 pt-12 pb-10 flex justify-center">
            <Image
              src={"/rudi_logo.png"}
              alt="Rudi logo"
              width={120}
              height={100}
            />      
          </header>
          
          <div className='pb-6'>
              <p className='text-white font-bold xl:text-base lg:text-lg md:text-xl sm:text-2xl'>
                <a href="https://maps.app.goo.gl/chSbtK8Q6XZTug6w5" target='_blank'>
                  30 Forrest Rd, Edinburgh EH1 2QN
                </a>
              </p>
          </div>

          <div className='w-full max-lg:px-10'>
            <a href="https://maps.app.goo.gl/chSbtK8Q6XZTug6w5" target='_blank'>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.2185268429166!2d-3.193568423106257!3d55.94558427315618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c784b14e4cfd%3A0xb951643a5bc547af!2s30%20Forrest%20Rd%2C%20Edinburgh%20EH1%202QN!5e0!3m2!1sen!2suk!4v1710509496469!5m2!1sen!2suk"
                  width="100%"
                  height="283"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                >
              </iframe>
            </a>
          </div>
          
        </div>

        {/* Contact us, telephone number and contact us form */}
        <div className='text-center flex flex-col items-center pb-10'>

          <header className='font-bold text-white p-16 text-xl'>
            CONTACT US
          </header>

          <div className='pb-6'>
            <p className='text-white font-bold xl:text-base lg:text-lg md:text-xl sm:text-2xl'>
              <a href="tel:01312266434">
                Tel: 01312266434
              </a>
            </p>
          </div>

          <div className='w-full px-20'>
            <ContactForm />
          </div>
          
        </div>
      
    </section>
  )
}
