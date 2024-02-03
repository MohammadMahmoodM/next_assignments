'use client'
import { configureStore } from '@reduxjs/toolkit'
import educationalSlice from '@/store/slices/serviceSlice'


export const store = configureStore({
    reducer: {
        educationalSlice: educationalSlice,
    },
  })