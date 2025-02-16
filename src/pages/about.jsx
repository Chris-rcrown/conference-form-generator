import { Link } from "react-router-dom";
import Header from "../components/header";
import Button from "../components/button";

const AboutProject = () => {
  return (
    <div  className="flex flex-col items-center bg-[#02191D]">
                <Header/>
            <div className="max-w-3xl mx-auto  bg-[#08252B] p-6 border border-[#0E464F] rounded-2xl shadow-md ">
            <h1 className="text-3xl text-[#24A0B5] font-jeju font-bold mb-4  ">
                About My Project: Event Ticket Generator
            </h1>

            <p className="text-gray-400 mb-4 font-light">
                This project is an <strong className="font-semibold">Event Ticket Generator</strong>,{ "designed to streamline ticket creation, management, and validation for events of all sizes. Whether you're hosting a conference, concert, or workshop, this tool simplifies ticket booking, ensures seamless access, and enhances attendee experience." }
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#24A0B5]">
                Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 font-light">
                <li><strong>Event Ticket Creation:</strong> Generate unique, scannable tickets for any event.</li>
                <li><strong>Payment & Checkout:</strong> Secure payment processing for seamless ticket purchases.</li>
                <li><strong>Attendee Management:</strong> Keep track of ticket holders in real time.</li>
                <li><strong>View Booked Tickets:</strong> Users can easily see their purchased tickets.</li>
                <li><strong>Landing Page:</strong> A well-designed homepage showcasing event details, pricing, and booking options.</li>
                <li><strong>IndexedDB Integration:</strong> Ensures ticket details are properly stored and persist across sessions.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#24A0B5]">
                Why This Project?
            </h2>
            <p className="text-gray-400 mb-4 font-light">
                Many event organizers struggle with managing ticketing efficiently. This project provides a 
                <strong className="font-semibold"> modern, automated, and user-friendly</strong> solution to handle ticket sales and validation. 
                Built with <strong>React, Tailwind CSS, and IndexedDB</strong>, it offers speed, flexibility, 
                and offline data persistence.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#24A0B5]">
                Tech Stack
            </h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 font-light">
                <li><strong>Frontend:</strong> React, Tailwind CSS</li>
                <li><strong>State Management:</strong> React Context API</li>
                <li><strong>Storage:</strong> IndexedDB for data persistence</li>
                <li><strong>Security:</strong> Secure checkout for payments</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#24A0B5]">
                Live Demo & Source Code
            </h2>
            <ul className="  font-medium flex items-center justify-between gap-[40px]">
                <Button className="border border-[#24A0B5] py-[12px] px-[24px] hover:bg-[#24A0B5] w-full h-full text-[#24A0B5] hover:text-[#FFFFFF] text-[16px]  transition-all duration-300 ease-in-out 
               transform hover:scale-105 active:scale-95
               hover:shadow-lg hover:shadow-[#24A0B580]">
                    <Link t0= "https://conference-form-generator.vercel.app/" target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                    </Link >
                </Button  >

                <Button className="border border-[#24A0B5] py-[12px] px-[24px] hover:bg-[#24A0B5] w-full h-full text-[#24A0B5] hover:text-[#FFFFFF] text-[16px]  transition-all duration-300 ease-in-out 
               transform hover:scale-105 active:scale-95
               hover:shadow-lg hover:shadow-[#24A0B580]">
                    <Link to ="https://github.com/Chris-rcrown/conference-form-generator" target="_blank" rel="noopener noreferrer">
                        Live Deployment
                    </Link>
                </Button>
                
            </ul>

            <p className="text-gray-400 mt-6 font-light">
                This project is actively being improved, with new features like 
                <strong className="font-semibold"> QR code validation and ticket scanning</strong> in development.
            </p>
         </div>
</div>
  );
};

export default AboutProject;
