import Header from "../components/header";
import Button from "../components/button";
import Form from "../components/form";
import { useNavigate } from "react-router-dom";
import { CloudUpload } from "lucide-react";
import { useGlobal } from "../context/GlobalContext";
import { useState } from "react";
import axios from "axios";

const Details = () => {
  const navigate = useNavigate();
  const { name, setName, email, setEmail, text, setText, image, setImage } = useGlobal();
  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);

  // Cloudinary Config
  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dpfhq4yll/upload";
  const UPLOAD_PRESET = "first_time";

  // Upload Image to Cloudinary
  const handleImageUpload = async (file) => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      const response = await axios.post(CLOUDINARY_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setImage(response.data.secure_url);
      setUploading(false);
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      setUploading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  // Form Validation
  const handleNext = () => {
    let isValid = true;
    const newErrors = {};

    if (!name.trim() || name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
      isValid = false;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
      isValid = false;
    }
    if (!image) {
      newErrors.image = "Please upload a profile picture.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      navigate("/getTicket");
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#02191D]">
      <Header />
      <Form className="bg-[#041E23] p-6 md:p-12 mb-8 w-[90%] md:w-[700px] border border-[#0E464F]">
        {/* Page Title */}
        <div>
          <p className="flex justify-between items-center mb-8 border-b-2 border-[#0E464F] w-full text-[#FFFFFF] capitalize">
            <span
              style={{ fontFamily: "Jeju" }}
              className="text-2xl md:text-3xl border-b-2 border-[#24A0B5] w-[287px] md:w-[326px]"
            >
              Attendee details
            </span>
            <span style={{ fontFamily: "Rbotor" }} className="text-lg">
              Step 2/3
            </span>
          </p>
        </div>

        {/* Form Container */}
        <div
          style={{ fontFamily: "Rbotor" }}
          className="bg-[#08252B] flex flex-col gap-8 p-6 md:p-8 border border-[#0E464F] rounded-3xl"
        >
          {/* Image Upload */}
          <div className="flex flex-col items-center p-6 bg-[#07373F] border border-[#07373F] rounded-3xl text-gray-100 w-full">
            <p className="text-lg text-gray-400 self-start capitalize">
              Upload profile photo
            </p>

            <div
              className="flex justify-center items-center mt-8 h-48 w-full bg-[#052228] "
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => document.getElementById("fileInput").click()}
            >
              <label
                htmlFor="image"
                className={`flex flex-col items-center justify-center p-6 h-60 w-60 bg-[#0E464F] border-2 border-[#24A0B5] rounded-2xl group cursor-pointer relative `}
              >
                {uploading ? (
                  <p>Uploading...</p>
                ) : image ? (
                  <img
                    src={image || null }
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  
            
                ) : ( null )}
                  <div className={`absolute inset-0 bg-opacity-50  flex flex-col items-center justify-center border rounded-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${image ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
                    <CloudUpload className="h-12 w-12 text-[#FAFAFA]" />
                    <p>Drag & drop or click to upload</p>
                  </div>
              
                <input
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  className="hidden"
                  onChange={handleImageChange}
                  required
                />
              </label>
            </div>
            <br />
            {errors.image && <span className="text-red-500">{errors.image}</span>}
          </div>
              <p className="text-[#24A0B5] text-[12px] "> Your Photo size should not be more than 1MB </p>
          <hr/>

          {/* Form Inputs */}
          <div style={{ fontFamily: "Robotor" }} className="flex flex-col gap-4">
            <label htmlFor="name" className="text-gray-100 text-lg">
              Enter your name
            </label>
            <input
              type="text"
              id="name"
              className="text-gray-100 text-lg border border-[#07373F] rounded-lg p-2 bg-transparent w-full  "
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}

            <label htmlFor="email" className="text-gray-300 text-lg">
              Enter your email*
            </label>
            <input
              type="email"
              placeholder="✉️ hello@avioflagos.io"
              className="text-gray-100 text-lg border border-[#07373F] rounded-lg p-2 bg-transparent w-full"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}

            <label htmlFor="about" className="text-gray-300 text-lg">
              Special request
            </label>
            <textarea
              id="project-sum"
              className="h-32 text-gray-600 text-lg border border-[#07373F] rounded-lg p-2 bg-transparent w-full"
              placeholder="Textarea"
              value = {text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex flex-col items-center justify-center md:flex-row gap-4 w-full">
            <Button
              onClick={() => navigate("/")}
              className="border border-[#24A0B5] py-2 px-6 w-full md:w-full text-[#24A0B5] hover:bg-[#24A0B5] hover:text-white rounded-lg text-center"
            >
              Back
            </Button>
            <Button
              onClick={handleNext}
              className="border border-[#24A0B5] py-2 px-6 w-full md:w-full bg-[#24A0B5] text-white rounded-lg text-center"
            >
              Get My Free Ticket
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Details;
