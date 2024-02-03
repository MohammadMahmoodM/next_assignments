'use client'
import React, {useState} from "react";
import {CreateRecord} from '@/store/slices/serviceSlice'
import { useDispatch } from "react-redux";

export default function Form() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const submit = ()=> {
    return(
      dispatch(CreateRecord({
        name: name,
        description: description,
        })
        )
    )
  }

  return (
    <form className="absolute top-[40%] left-[85%] transform -translate-x-1/2 -translate-y-1/2 text-stone-50">
      <h1 className="text-3xl text-center mb-5">Form</h1>
        <div className="flex mb-4">
          <label className="w-24">Title</label>
          <input
            type="text"
            className="bg-gradient-radial from-red-700 to-green-700 text-white border-2 border-white transition duration-700 hover:border-orange-700"
          />
        </div>
        <div className="flex mb-4 ">
          <label className="w-24">Description</label>
          <input
            type="text"
            className="bg-gradient-radial from-red-700 to-green-700 text-white border-2 border-white transition duration-700 hover:border-orange-700"
          />
        </div>
        <div className="flex justify-center">
          <button onClick={submit} className="text-white border-2 border-white w-20 rounded-full transition duration-700 hover:border-orange-700">
            Submit
          </button>
        </div>
    </form>
  );
}
