'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allServices: [{
        id: 1,
        name: "A.I",
        description: "Artificial Intelligence",
        },
        {
        id: 2,
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
        },
        UpdateRecord: (state,action)=> {
            state.allServices = state.allServices.map((service)=>{
                
                    if (service.id == action.payload.id){
                        return(
                            action.payload
                        )
                    }
                    return service
                   
            })
        }
    }
  })

  export const { CreateRecord, UpdateRecord } = educationalSlice.actions
  export default educationalSlice.reducer


