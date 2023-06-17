import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can send the form data to an API endpoint or handle it in any way you prefer
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className="ml-8 my-8">
        <h1
        className="text-2xl border-b border-cyan-400">Formularz kontatkowy</h1>
        <div className="max-w-md mx-auto my-8 p-6 bg-white shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Skontaktuj sie z nami</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
            <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium"
            >
                Imie
            </label>
            <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </div>
            <div className="mb-2">
            <label 
                htmlFor="surname" 
                className="block mb-2 text-sm font-medium"
            >
                Nazwisko
            </label>
            <input
                type="text"
                id="surname"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
            />
            </div>
            <div className="mb-2">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
            </label>
            <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className="mb-2">
            <label 
                htmlFor="phoneNumber" 
                className="block mb-2 text-sm font-medium"
            >
                Numer Telefonu
            </label>
            <input
                type="number"
                id="phoneNumber"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
            />
            </div>
            <div className="mb-4">
            <label 
                htmlFor="message" 
                className="block mb-2 text-sm font-medium"
            >
                Wiadomosc
            </label>
            <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
            ></textarea>
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
            Wyslij
            </button>
        </form>
        </div>
    </div>
  );
};

export default ContactForm;