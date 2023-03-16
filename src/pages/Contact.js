import React from 'react'

export default function Contact() {
  return (
    <div className='container md:flex md:mb-16'>
        <div className='flex-col px-6 mb-8 md:px-0 mt-8 mx-auto md:justify-between'>
        <div className='md:px-2'>
        <h1 className='text-3xl '>Dane kontaktowe:</h1>
        <span className='flex py-1'>Email:  <p className='mx-4'>xyz</p></span>
        <span className='flex py-1'>Telefon <p className='mx-4'>690259407</p></span>
        </div>
        <div className='flex flex-col mt-8'>
        <h1 className='text-2xl'>Adres odbioru osobistego:</h1>
        <span className=''>Lorem ipsum dolor sit.</span>    
        </div>
        </div>



        <div className='flex flex-col mb-8 px-6 md:mx-auto justify-between  mt-8'>
        <span className='text-2xl pt-4 md:px-24'>Numer konta bankowego: <p className='text-lg'>29 2020 2020 2020 2020 2020 2020</p></span>
        <span className='text-2xl pt-4 md:px-24'>Dane dla przelewow zagranicznych: <p className='text-lg'>IBAN: PL32 1780 9048 9000 0600 4545 9316 BIC/SWIFT: RCBWPLPW</p></span>
        </div>
    </div>
  )
}
