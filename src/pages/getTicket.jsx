import Header from "../components/header";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import LineDivider from "../components/lineDivider";
import { useGlobal } from "../context/GlobalContext";
import { Barcode } from "lucide-react";

const GetTicket = () => {
  const navigate = useNavigate();
  const { name, email, ticketType, text, numPeople, image } = useGlobal();

  const handlePrint = (e) => {
    e.preventDefault()
    
    const ticketElement = document.getElementById("ticket-download");
    if(!ticketElement){
      console.error("Ticket element not found!");
      return;
    }
    document.body.classList.add("print-mode")
    window.print();
    setTimeout(() => {
      document.body.classList.remove("print-mode")
    })
  };


  return (
    <div className="flex flex-col items-center bg-[#02191D]">
      <Header />
      <div className="bg-[#041E23] p-[48px] mb-[32px] w-[700px] max-w-[90vw] border border-[#0E464F] rounded-2xl">
        <div style={{fontFamily: 'robotor'}}>
          <p className="flex  mb-[32px] md:flex-row justify-between items-center text-[#FFFFFF] border-b-2 border-[#0E464F]">
            <span style={{fontFamily: 'Jeju'}} className="text-[32px] capitalize border-b-2 border-[#24A0B5] w-[232px]">
              Ready
            </span>
            <span className="text-[16px] capitalize">step 3/3</span>
          </p>
        </div>
        <div style={{fontFamily: 'robotor'}} className="flex flex-col gap-[24px] items-center rounded-lg">
          <div className="flex flex-col gap-[16px] text-gray-300 text-center">
            <h2 style={{fontFamily: 'Alasti'}} className="text-[32px]">Your Ticket is Booked!</h2>
            <p className="text-[16px]">
              Check your email for a copy or you can{" "}
              <span className="font-bold">download</span>
            </p>
          </div>
          {/* Ticket card */}
          <div id="ticket-download" style={{fontFamily: 'robotor'}} className="bg-gradient-to-b from-[#133D44] to-[#031E21] p-4 relative custom-clip-path border border-[#24A0B5] rounded-2xl shadow-md mb-[24px] w-[300px] h-[700px] flex flex-col">
            <div className="border border-[#24A0B5] rounded-2xl w-[260px] h-[446px] p-[14px] ">
            <div className="flex flex-col items-center w-[260px] h-[446px] py-4">
              <div className="mt-[14px]">
                <h3 style={{fontFamily: 'Roadrage'}} className="text-lg  text-center text-gray-100 text-[34px]">
                  {'Techember Fest "25'}
                </h3>
                <p className="text-center text-sm text-gray-400 text-[10px]">
                  04 Rumens Road, Ikoyi, Lagos <br />
                  March 15, 2025 | 7:00 PM
                </p>
              </div>
              <div className="w-[140px] h-[140px]  my-[32px]">
                <img src={image} alt="User profile picture" className="border-2 border-[#24A0B5] rounded-2xl" />
              </div>
              <div className="p-[4px] bg-[#08343C] border border-[#133D44] rounded-xl font-robotor ">
                <div className="mt-4 text-sm grid grid-cols-2 gap-[8px] p-[4px] text-gray-200">
                  <div className="flex flex-col flex-wrap justify-between p-[2px] border border-b-[#12464E] border-r-[#12464E] border-t-0 border-l-0 break-words overflow-hidden">
                    <span className="text-[10px] text-gray-400">
                      Enter your name
                    </span>
                    <span className="font-semibold text-[12px] mt-1">
                      {name}
                    </span>
                  </div>
                  <div className="flex flex-col flex-wrap justify-between p-[2px] border border-b-[#12464E] border-r-[#12464E] border-t-0 border-l-0 text-[10px] w-full break-words overflow-hidden ">
                    <span className=" text-gray-400">
                      Enter your Email
                    </span>
                    <span className="font-semibold text-[12px] mt-1">
                      {email}
                    </span>
                  </div>
                  <div className="flex flex-col justify-between mt-2 p-[2px] border border-b-[#12464E] border-r-[#12464E] border-t-0 border-l-0 text-[10px] ">
                    <span className="text-gray-400">
                      Ticket Type:
                    </span>
                    <span className="font-semibold text-[12px] mt-1">
                      {ticketType}
                    </span>
                  </div>
                  <div className="flex flex-col justify-between mt-2 p-[2px] border border-b-[#12464E] border-r-[#12464E] border-t-0 border-l-0 text-[10px]">
                    <span className="text-gray-400">
                      Ticket for:
                    </span>
                    <span className="  mt-1">
                      {numPeople}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[4px] p-[8px] text-[10px]">
                  <span className=" text-gray-400">
                    Special request
                  </span>
                  <span className="text-gray-500 mt-2 italic w-full">
                    {text || "No special requests"}
                  </span>
                </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#133D44] to-[#031E21] p-4 relative custom-clip-path rounded-2xl">
              <div>
                <LineDivider />
              </div>
              <div className="mt-1 flex flex-col items-center justify-center h-[94px] ">
                
                <div className="flex">
                <Barcode className="w-auto h-[50px] text-white"/>
                <Barcode className="w-auto h-[50px] text-white"/>
                <Barcode className="w-auto h-[50px] text-white"/>
                <Barcode className="w-auto h-[50px] text-white"/>
                </div>
                <p className="flex justify-evenly text-gray-300 gap-4">
                  <span>234567</span>
                  <span>891026</span>
                </p>
              </div>
              </div>
          </div> 
          {/* ticket end */}
          </div>
          <div style={{fontFamily: 'Jeju'}} className="flex flex-col md:flex-row gap-[24px] mt-[32px]">
            <Button
              onClick={() => navigate("/")}
              className="border border-[#24A0B5] py-[12px] px-[24px] hover:bg-[#24A0B5] w-full h-full text-[#24A0B5] hover:text-[#FFFFFF] text-[16px]"
              aria-label="Book another ticket"
            >
              Book Another Ticket
            </Button>
            <Button
              onClick={handlePrint}
              className="border border-[#24A0B5] py-[12px] px-[24px] bg-[#24A0B5] w-full h-full text-[#FFFFFF] text-[16px]"
              aria-label="Download ticket"
            >
              Download Ticket
            </Button>
            
        </div>
      </div>
    </div>
  );
};

export default GetTicket;
