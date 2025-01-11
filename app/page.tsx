import Discount from "./components/Discount";
import Auth from '@/app/components/Auth'

export default async function Home() {

  const url = await fetch('http://localhost:3000/api/discount', {
    cache: 'no-store',
  })
  const message = await url.json()

  return (
    <div className='container mx-auto flex flex-col items-center justify-center h-screen'>
      
      {/* Both are the two different tasks. One is for the Authentication and Authorization and other is the Discount Component */}

      {/* Authentication and Authorization */}
      <Auth />
      Your final price is {message.price}
      
      {/* Discount Task */}
      <Discount />
    </div>
  );
}