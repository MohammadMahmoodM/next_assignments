'use client'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import {store}  from '@/store/store'
import { Provider } from 'react-redux'

export default function Home() {
  return (
    <main>
      
      <Navbar />
      <Provider store={store}>
        <Hero />
      </Provider>

    </main>
  );
}
