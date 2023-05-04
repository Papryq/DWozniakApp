import React from 'react'
import ContactForm from '../components/contactComponents/ContactForm'
import ContactInformation from '../components/contactComponents/ContactInformation'

export default function Contact() {
  return (
    <div className='container md:flex md:mb-16'>
        <ContactInformation />
        <ContactForm />
    </div>
  )
}
