"use client";
import DisplayFormResult from "./displayFormResult";

export default function EntryForm() {
  return (
    <div className=" mx-auto bg-white rounded-md p-8 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

      {/* Form */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
          <div className="mb-4">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="son/daughter"
              className="block text-sm font-medium text-gray-600"
            >
              Son/Daughter of
            </label>
            <input
              type="text"
              id="son/daughter"
              name="son/daughter"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

           <div className="mb-4">
            <label
              htmlFor="cnic"
              className="block text-sm font-medium text-gray-600"
            >
              CNIC
            </label>
            <input
              type="cnic"
              id="cnic"
              name="cnic"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

           
          <div className="mb-4">
            <label
              htmlFor="cityname"
              className="block text-sm font-medium text-gray-600"
            >
              City Name
            </label>
            <input
              type="city"
              id="cityname"
              name="cityname"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="street"
              className="block text-sm font-medium text-gray-600"
            >
              Street Address
            </label>
            <input
              type="street"
              id="street"
              name="street"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="PermanentAddress"
              className="block text-sm font-medium text-gray-600"
            >
              Permanent Address
            </label>
            <input
              type="PermanentAddress"
              id="PermanentAddress"
              name="PermanentAddress"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
