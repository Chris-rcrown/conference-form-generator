import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/button";
import Form from "../components/form";
import ticketOptions from "../data/ticketOption";
import { useGlobal } from "../context/GlobalContext";

const TicketSelection = () => {
  const navigate = useNavigate();
  const { ticketType, setTicketType, numPeople, setNumpeople } = useGlobal();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!ticketType) newErrors.ticket = "Please select a ticket type.";
    if (numPeople < 1) newErrors.numPeople = "Number of people must be at least 1.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) navigate("/details");
  };

  return (
    <div className="flex justify-center p-6 lg:min-h-[100vh] ">
      <Form className="bg-[#041E23] p-6 md:p-12 w-full   max-w-2xl border border-[#0E464F] rounded-lg ">
        
        {/* Header */}
        <div className="mb-6 border-b-2 border-[#0E464F]  flex flex-col md:flex-row md:justify-between md:items-center ">
          <span style={{ fontFamily: "Jeju" }} className="text-2xl md:text-3xl text-white font-bold md:border-b-2 border-[#24A0B5]">Ticket Selection</span>
          <span style={{ fontFamily: "RobotoR" }} className="text-sm md:text-base text-white border-b-2 border-[#24A0B5] md:border-0 w-[232px] md:w-auto">Step 1/3</span>
        </div>

        {/* Event Info */}
        <div className="bg-[#08252B] p-6 border border-[#0E464F] rounded-lg">
          <div className="bg-gradient-to-b from-[#133D44] to-[#031E21] p-6 text-white text-center rounded-lg border border-[#07373F]">
            <h1 style={{ fontFamily: "Roadrage" }} className="text-4xl md:text-5xl ">{'Techember Fest "25'}</h1>
            <p style={{ fontFamily: "RobotoR" }} className="mt-4 text-sm md:text-base">Join us for an unforgettable experience at <br/> TechFest! Secure your spot now.</p>
            <p style={{ fontFamily: "Roboto" }} className="mt-2 flex items-center justify-center text-sm">
               📍04, Rumens Road, Ikoyi, Lagos || March 15, 2025 | 7:00PM
            </p>
          </div>
        </div>

        {/* Ticket Type Selection */}
        <fieldset className="mt-6">
          <legend style={{ fontFamily: "Robotor" }} className="mb-2 text-white text-lg">Select Ticket Type</legend>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-[#052228] border border-[#07373F] rounded-lg">
            {ticketOptions.map((ticket, index) => (
              <Button
                key={index}
                className={`flex flex-col items-start justify-center p-4 rounded-lg text-white border transition-all w-full ${
                  ticketType === ticket.type
                    ? "bg-[#051214] border-[#197686]"
                    : "bg-[#12464E] border-[#24A0B5] hover:bg-[#2c545b]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setTicketType(ticket.type);
                }}
              >
                <p className="text-lg font-bold">{ticket.price}</p>
                <p className="uppercase text-sm font-bold">{ticket.type}</p>
                <p className="text-xs font-bold">{ticket.available}/52</p>
              </Button>
            ))}
          </div>
          {errors.ticket && <span className="text-red-500">{errors.ticket}</span>}
        </fieldset>

        {/* Number of Tickets */}
        <div className="mt-6">
          <label style={{ fontFamily: "Robotor" }} htmlFor="ticket-no" className="block text-white text-lg">
            Number of Tickets
          </label>
          <select
            id="TicketCount"
            className="mt-2 w-full text-white border border-[#07373F] rounded-lg p-3 cursor-pointer bg-[#12464E]"
            value={numPeople}
            onChange={(e) => setNumpeople(Number(e.target.value))}
          >
            {[...Array(6).keys()].map((num) => (
              <option key={num} value={num} className="bg-[#197686] hover:bg-[#24A0B5]">
                {num}
              </option>
            ))}
          </select>
          {errors.numPeople && <span className="text-red-500">{errors.numPeople}</span>}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <Button
            onClick={() => navigate("/")}
            className="border border-[#24A0B5] py-3 px-6 hover:bg-[#24A0B5] w-full md:w-full text-[#24A0B5] hover:text-white text-lg"
          >
            Cancel
          </Button>
          <Button
            onClick={handleNext}
            className="border border-[#24A0B5] py-3 px-6 hover:bg-[#24A0B5] w-full md:w-full text-[#24A0B5] hover:text-white text-lg"
          >
            Next
          </Button>
        </div>

      </Form>
    </div>
  );
};

export default TicketSelection;
