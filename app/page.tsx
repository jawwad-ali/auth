import Discount from "./components/Discount";

export default async function Home() {

  const url = await fetch('http://localhost:3000/api/discount', {
    cache: 'no-store',
  })
  const message = await url.json()

  return (
    <div className='container mx-auto'>
      Your final price is {message.price}
      <Discount />
    </div>
  );
}