import React from 'react'

export default function ContactInformation() {
  return (
    <>
        <div className='flex-col px-6 mb-8 md:px-0 mt-8 mx-auto md:justify-between'>
            <div className='md:px-2'>
                <h1 className='text-3xl '>Dane kontaktowe:</h1>
                <span className='flex py-1'>Email: xyz</span>
                <span className='py-1'>Telefon: 690259407</span>
            </div>
            <div className='mt-8'>
                <h1 className='text-2xl'>Adres odbioru osobistego:</h1>
                <span className=''>Lorem ipsum dolor sit.</span>    
            </div>
        </div>
        <div className='flex-col px-6 mb-8 md:px-0 mt-8 mx-auto md:justify-between'>
            <h1 className='text-3xl '>Numer konta bankowego:</h1>
            <span className="py-1">32 0000 1048 0000 0000 0000 0000 <p className='font-bold'>BNP Paribas Bank Polska S.A</p></span>
            <div className='mt-8'>
            <h1 className='text-2xl'>Dane dla przelewów zagranicznych:</h1>
            <span className=''>IBAN: PL32 0000 1000 0000 0000 0000 9316 <p className='font-bold'>BIC/SWIFT: RCBWPLPW</p></span>    
            </div>
        </div>
  </>
  )
}
