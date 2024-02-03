'use client'
import React, {useState} from "react";
import {CreateRecord, UpdateRecord} from '@/store/slices/serviceSlice'
import { useDispatch } from "react-redux";

export default function Form() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const submit = (event:any)=> {
      event.preventDefault();

      dispatch(CreateRecord({
        id: Math.random(),
        name: name,
        description: description,
        })
        )
        setName('')
        setDescription('')  
  }

  const edit = (event:any)=> {
    event.preventDefault();

    dispatch(UpdateRecord({
      name: name,
      description: description,
    }))

    setName('')
    setDescription('')
  }

  return (
    <form className="  text-stone-50">
      <h1 className="text-3xl text-center mb-5">Form</h1>
        <div className="flex xs:flex-col sm:flex-row md:flex-row mb-4">
          <label className="w-24">Title</label>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="bg-gradient-radial from-red-700 to-green-700 text-white border-2 border-white transition duration-700 hover:border-orange-700"
          />
        </div>
        <div className="flex xs:flex-col sm:flex-row md:flex-row mb-4">
          <label className="w-24">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            className="bg-gradient-radial from-red-700 to-green-700 text-white border-2 border-white transition duration-700 hover:border-orange-700"
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" onClick={submit} className="text-white border-2 border-white w-20 rounded-full transition duration-700 hover:border-orange-700">
            Submit
          </button>
        </div>
    </form>
  );
}
