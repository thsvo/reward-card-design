"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-[#d1e0ed] via-[#30a3fe] to-[#9ecbe3] px-9 ">
        {/* Navigation */}
        <nav className="container mx-auto flex items-center justify-between ">
             
        <img
                        
                        src="https://truegas.codeopx.com/logo.svg"
                        alt="Valu-Life Logo"
                        width={170}
                        height={300}
                      />
          <div className="hidden space-x-8 md:flex"></div>
          <a
            href="https://wa.me/18762906491"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hidden rounded-full border-2 bg-transparent px-8 text-white hover:bg-white hover:text-purple-600 md:block">
              WhatsApp: +1876-290-6491
            </Button>
          </a>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto grid gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-6xl">
              Get rewarded for shopping with us.
            </h1>
            <p className="text-lg text-white/80">
              Let’s have a great day and a great week. Come in and check us out
              today. We have some great promotions going on.
            </p>
            <ul className="space-y-4">
              {[
                "Increase brand awareness and sales.",
                "Rank higher on Google search engine.",
                "Double your actual website traffic.",
                "Outrank your competitors.",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-white">
                  <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-purple-600">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Card Section */}
          <div className="rounded-2xl bg-white p-8 shadow-xl to-red-600">
            <div className="container mx-auto px-4 py-8 text-center text-white">
              <p className="text-2xl font-script text-[#9d44f0]">
                Get Rewarded just for shopping
              </p>
              <h1 className="mt-4 text-6xl text-[#9d44f0]  font-bold tracking-tight md:text-7xl">
                SIGN UP
                <br />
                TODAY
                <span className="text-[#FFB800]">!</span>
              </h1>
            </div>
            <div className="relative mx-auto mb-8 max-w-md">
              {/* Back Card */}
              <div className="absolute left-4 top-4 h-48 w-full -rotate-6 rounded-xl bg-[#008000] shadow-xl"></div>
              {/* Front Card */}
                  
            
              <div className="relative h-48 w-full rotate-6 rounded-xl bg-[#00A0E3] p-6 shadow-2xl">
                    
           
                <div className="flex h-full flex-col justify-between">
                  <div className="space-y-2">
                  
                    <h2 className="text-5xl italic font-bold font-script text-white">
                      
                    <img
                        className=" lg:ml-20  absolute -z-10"
                        src="https://truegas.codeopx.com/onlylogo.svg"
                        alt="Valu-Life Logo"
                        width={300}
                        height={300}
                      />
                      Valu-Rewards
                    </h2>
                    <div >
                    
                    </div>
                    <p className="text-xl text-white/90 italic font-bold">
                      VALU-LIFE PHARMACY
                    </p>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="h-8 w-8 rounded-full bg-white/20"></div>
                    <div className="h-8 w-8 text-white">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-full w-full"
                      >
                        <path d="M12 3a9 9 0 0 0-9 9v9h6v-3a3 3 0 0 1 6 0v3h6v-9a9 9 0 0 0-9-9z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <form className="space-y-4">
              <Input type="text" placeholder="Full Name*" className="w-full" />
              <Input type="email" placeholder="Email*" className="w-full" />
              <Input
                type="phone"
                placeholder="Phone Number*"
                className="w-full"
              />
              <Button className="w-full bg-yellow-400 text-purple-900 hover:bg-yellow-500">
                Sign up
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
