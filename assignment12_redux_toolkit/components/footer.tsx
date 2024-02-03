import Logo from '@/public/logo.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-auto bg-gradient-to-r from-green-400 to-red-500 border-2 border-red-800">
      <div className='flex justify-center items-center h-24'>
      <Image src={Logo} height={100} width={100} alt=""/>
      </div>
      <div className='flex justify-center items-center h-24'>Build By: Mohammad Mahmood</div>
      <div className='flex justify-center items-center h-24'>Supporter: PTI</div>
    </div>
  )
}
