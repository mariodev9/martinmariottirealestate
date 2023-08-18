import TitleSection from '@/components/Layout/TitleSection'
import React from 'react'
import {PrimaryButton} from '@/components/Buttons/PrimaryButton'
import { ServiceList } from '@/db/Services'
import { AdvantageList } from '@/db/Advantages'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Service } from '@/db/Services'
import { SwiperSlide, Swiper } from "swiper/react";
import ServiceImage1 from "@/../public/images/servicesImage1.jpg"
import ServiceImage2 from "@/../public/images/servicesImage2.jpg"
import ServiceImage3 from "@/../public/images/servicesImage3.jpg"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  }
}

const serviceVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring"
    }
  },
}





const ServiceBox = ({title, image, index, subtitle}:Service) => (
    <motion.div                   
      className="flex flex-col justify-between"
      variants={serviceVariant}
    >

      {/* Image */}
      <motion.div 
        className='relative w-full h-64  rounded-2xl overflow-hidden'
      >
        <Image
          src={image}
          alt='imagen del servicio' 
          layout="fill"
          objectFit="cover"
          quality={100} 
        />
      </motion.div>
      <div className='py-3 px-3'>
        <div className='inline rounded-full border border-greensecondary text-greensecondary px-3 py-1 font-regular text-sm'>
          {subtitle}
        </div>
        <p className='mt-3 text-xl font-semibold'>{title}</p>
      </div>
  </motion.div>
)

const MostrarProceso = () => (
  <>
          <h2 className='font-medium md:text-xl'>
          Maximiza la eficacia de tu inversión delegando todo el proceso:
          </h2>
          <div>
            <Swiper
              spaceBetween={20}
              breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              450: {
                slidesPerView: 1.5,
              },
              720: {
                slidesPerView: 3,
              },
              960: {
                slidesPerView: 3.5,
              },
              1200: {
                slidesPerView: 4,
              },
          }}
        >
          {ServiceList.map((item, index) => (
            <SwiperSlide key={item.title} index={index} {...item}>
                <ServiceBox  index={index} {...item}/>
            </SwiperSlide>
          ))}
            </Swiper>
          </div>
  </>
)

const MostrarVentajas = () => (
    <>
    <p className='text-secondary text-md md:text-xl mt-5 text-center'>
      Como Agente del Comprador, me dedico exclusivamente a la búsqueda de propiedades por encargo expreso de mis clientes compradores, ya sea que se encuentren en España o Italia al momento de la compra.
    </p>
    <div className='flex flex-col md:flex-row w-full'>
    <div className='text-center md:text-start w-full md:w-1/4'>
    <h2 className='font-semibold text-3xl'>¿Por que contratar mis servicios?</h2>
    <h3 className='mt-3 text-secondary text-base font-light'>Obten ventajas claras al trabajar conmigo</h3>
    </div>
    <motion.div 
      initial={{opacity: 0, x: -50}}
      whileInView={{ opacity: 1, x: 0}}
      transition={{ duration: 1,}}
      viewport={{ once: true }}
      className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-3/4 mt-5 md:mt-0'
    >
      {AdvantageList.map( item => (
        <div key={item.title} className="py-7 px-5 bg-white rounded-3xl shadow-lg flex flex-col gap-3 ">
        <div>{item.icon}</div>
        <h3 className='font-bold text-xl mt-4'>{item.title}</h3>
        <p className='text-secondary text-sm'>{item.description}</p>
        </div>
      ))}
      </motion.div>
      </div>
      </>
)

const MostrarImagenes = () => (
  <div className='hidden md:grid grid-cols-2 gap-3 '>
    <div className="grid grid-rows-2 gap-3" >
      <div className='relative rounded-2xl overflow-hidden '>
      <Image 
        src={ServiceImage3} 
        alt='Imagen de una casa' 
        layout="fill"
        objectFit="cover"
        quality={100}/>
      </div>
      <div className='relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0000001a]'>
      <Image 
        src={ServiceImage2} 
        alt='Imagen de una casa' 
        layout="fill"
        objectFit="cover"
        quality={100}/>
      </div>
    </div>
    <div className=' overflow-hidden relative border-2 rounded-2xl shadow-2xl shadow-[#0000001a]'>
      <Image 
        src={ServiceImage1} 
        alt='Imagen de una casa' 
        layout="fill"
        objectFit="cover"
        quality={100}/>
    </div>
  </div>
)

export default function ServicesSection() {
  
  return (
      <div className='flex flex-col gap-12 pt-5'>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div>
            <TitleSection
              content='Te ayudo a concretar tu proyecto de inversión en bienes raíces, brindando un acompañamiento integral y servicios personalizados' 
              alignment={"start"} 
            />
            <div className='mt-6'>
              <h2 className='font-medium md:text-xl'>
                Simplifica tu inversión en inmuebles delegando todo el proceso: 
              </h2>
              <ul className='list-disc mt-5 md:text-lg'>
                {ServiceList.map((item, index) => (
                  <li key={item.title} className='flex items-center gap-3 '>
                    <div className='h-3 w-3 bg-greensecondary  rounded-full'></div>
                    <p className=''>{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
            {MostrarImagenes()}
        </div>

      {MostrarProceso()}

      {MostrarVentajas()}

      {/* Call to action */}
        <div className="mt-5 flex justify-center">
          <PrimaryButton mode='light'> 
            Proyectemos juntos
          </PrimaryButton>
        </div>

      </div>


  )
}
