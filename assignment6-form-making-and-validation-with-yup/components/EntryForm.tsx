"use client";
import DisplayFormResult from "./displayFormResult";
import { useState } from "react";
import * as yup from "yup"
import {FormEntries, EventEntriesObject} from '../types/FormTypes'

export default function EntryForm() {
  let [formEntries, setFormEntries] = useState<FormEntries>({
    first_name: "",
    last_name: "",
    son_daughter: "",
    email: "",
    phone: 0,
    cnic: 0,
    cityname: "",
    street: "",
    PermanentAddress: "",
    message: "",
  });

  const [errors, setError ] = useState<string[]>([])

  const contactInfoSchema = yup.object().shape({
    name: yup.string().required().min(5).max(10)
  })

  const formEntriesHandler = (event: EventEntriesObject) => {
    let formEntriesGettingUpdate = {
      ...formEntries,
      [event.target.name]: [event.target.value],
    };
    setFormEntries(formEntriesGettingUpdate);
  };

  const onClickHandler = async () => {
    try {
     const result = await contactInfoSchema.validate(formEntries)
     console.log(result);
     
      
     if (!result) {
       return 
     }

    } catch (err:any) {

        setError(err.errors)
  
         console.log("error",err.errors);
         
       }
     
      
    }

  return (
    <div className=" mx-auto bg-white rounded-md p-8 shadow-md">
      <DisplayFormResult ObjectContainingAllEntries={formEntries}/>
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
              onChange={formEntriesHandler}
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
              onChange={formEntriesHandler}
              type="text"
              id="last_name"
              name="last_name"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="son_daughter"
              className="block text-sm font-medium text-gray-600"
            >
              Son/Daughter of
            </label>
            <input
              onChange={formEntriesHandler}
              type="text"
              id="son_daughter"
              name="son_daughter"
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
              onChange={formEntriesHandler}
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
              onChange={formEntriesHandler}
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
              onChange={formEntriesHandler}
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
              onChange={formEntriesHandler}
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
              onChange={formEntriesHandler}
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
              onChange={formEntriesHandler}
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
            onChange={formEntriesHandler}
            id="message"
            name="message"
            rows={4}
            className="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex items-center">
          <button
            onClick={onClickHandler}
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
