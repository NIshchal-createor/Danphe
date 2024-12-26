import React, { useState, useEffect, ChangeEvent } from "react";
import { World } from "../Assets/images";

interface CountryCode {
  name: string;
  code: string;
}

const Connect: React.FC = () => {
  const [countryCodes, setCountryCodes] = useState<CountryCode[]>([]);
  const [selectedCode, setSelectedCode] = useState<string>("+977"); // Default to Nepal

  // Fetch country codes from the API
  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const codes: CountryCode[] = data
          .map((country: any) => ({
            name: country.name.common,
            code: country.idd?.root
              ? `${country.idd.root}${country.idd.suffixes?.[0] || ""}`
              : "",
          }))
          .filter((item: CountryCode) => item.code);
        setCountryCodes(codes.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchCountryCodes();
  }, []);

  const handleCodeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCode(e.target.value);
  };

  useEffect(() => {
    const formDiv = document.querySelector(".form-div") as HTMLElement | null;
    const imageDiv = document.querySelector(".image-div") as HTMLElement | null;

    if (formDiv && imageDiv) {
      const formHeight = formDiv.offsetHeight;
      imageDiv.style.height = `${formHeight}px`;
    }
  }, []);

  return (
    <div className="overflow-hidden w-full my-14 mx-auto max-w-[1366px]">
      <h1 className="text-3xl text-black text-center w-full my-5 font-bold">
        Connect With Us
      </h1>
      <div className="flex w-full gap-2 px-2">
        <div className="form-div flex flex-col border bg-white border-black px-6 py-4 mx-auto w-full max-w-4xl rounded-lg h-fit">
          <h3 className="text-xl text-primary mb-6">
            Enter your details and get a free counsel over all Countries visa
            and appointments.
          </h3>
          <form>
            <div className="flex flex-col my-4 text-black">
              <label htmlFor="name" className="text-lg">
                <span className="text-red-500">*</span> Full Name:
              </label>
              <div className="flex py-2 gap-3">
                <input
                  className="border-b border-black outline-none text-md w-full"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name"
                  required
                />
                <input
                  className="border-b border-black outline-none text-md w-full"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col my-4 text-black">
              <label htmlFor="email" className="text-lg">
                <span className="text-red-500">*</span> Email Address:
              </label>
              <div className="flex py-2">
                <input
                  className="border-b border-black outline-none text-md w-full"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col my-4 text-black">
              <label htmlFor="contact" className="text-lg">
                <span className="text-red-500">*</span> Contact No.:
              </label>
              <div className="flex items-center py-2 border-black">
                <select
                  value={selectedCode}
                  onChange={handleCodeChange}
                  className="bg-gray-200 text-black border border-gray-300 rounded-l-md px-3 py-2 w-36 outline-none"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name} ({country.code})
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  placeholder="Enter your contact number"
                  className="border-b border-black outline-none text-md w-full px-3"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col my-4 text-black">
              <label htmlFor="country" className="text-lg">
                <span className="text-red-500">*</span> Which country are you
                applying to?
              </label>
              <div className="flex py-2">
                <select
                  name="country"
                  id="country"
                  className="bg-gray-200 text-black border border-gray-300 rounded-md px-3 py-2 w-full outline-none"
                  required
                >
                  <option value="" disabled selected>
                    Select a country
                  </option>
                  {countryCodes.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex my-4 text-black gap-3 items-center">
              <input
                className="w-5"
                type="checkbox"
                name="termsandcondition"
                id="termsandcondition"
                required
              />
              <label htmlFor="termsandcondition" className="text-lg">
                I agree to terms and conditions of Danphe International
              </label>
            </div>

            <div className="flex my-4 text-black gap-3 items-center">
              <input className="w-5" type="checkbox" name="msg" id="msg" />
              <label htmlFor="msg" className="text-lg">
                Inform me through WhatsApp, Call or SMS, or Mail me directly...
              </label>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-dark transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="image-div sm:flex w-full h-full overflow-hidden hidden rounded-xl">
          <img
            className="w-[100%] object-cover h-full"
            alt="world map"
            src={World}
          />
        </div>
      </div>
    </div>
  );
};

export default Connect;
