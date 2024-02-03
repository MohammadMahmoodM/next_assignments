'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allServices: [{
        name: "A.I",
        description: "Artificial Intelligence",
        },
        {
        name: "W.A",
        description: "Web App",
        }
    ]
}
  

  const educationalSlice = createSlice({
    name: 'educationalServices',
    initialState: initialState,
    reducers : {
        CreateRecord: (state,action)=> {
            state.allServices = [...state.allServices, action.payload ]
        }
    }
  })

  export const { CreateRecord } = educationalSlice.actions
  export default educationalSlice.reducer


