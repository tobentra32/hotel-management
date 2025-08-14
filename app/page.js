"use client"
import { getApartments } from './services/blockchain';
import { Category, Collection } from './components/index';

export default async function Home() {

  const apartmentsData = await getApartments();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Category />
      <Collection appartments={apartmentsData} />
      
    </div>
  );
}
// Note: The above code assumes that the `getApartments` function is correctly implemented to fetch apartment data from the blockchain.