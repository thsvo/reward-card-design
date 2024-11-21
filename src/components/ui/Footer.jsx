"use client"

import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <div className="bg-white p-6 text-center">
      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co.com/zZdmkvq/logo.png"
            alt="Valu-Life Logo"
            width={64}
            height={64}
          />
          
          <div className="text-left">
            <h1 className="text-2xl font-bold text-blue-600 italic ">VALU-LIFE</h1>
            <p className="text-lg font-medium text-gray-800 letter tracking-widest ">PHARMACY</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <div className="border-l-2 border-gray-300 h-8"></div>
          <Instagram className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-medium text-gray-800">VALULIFEPHARMACY</span>
        </div>
      </div>
      <div className="mt-4 text-gray-800">
        <p className="font-bold">
          Shops 6-7 White River North Commercial Complex, Ochi Rios, St, Ann
        </p>
        <p className="text-sm">
          CONTACT: (876) 675-9036 / (876) 290-6491 | EMAIL: VALULIFE.RX@GMAIL.COM
        </p>
      </div>
    </div>
  )
}

