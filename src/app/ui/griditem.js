'use client';
import Link from "next/link";
export default function GridItem({ item }) {
  return (
    <Link href={`/gpts/${(item.id)}`}>
      <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-[#7e7e7e] bg-white p-8 hover:scale-105 transition-transform">
        <div className="mb-4 flex flex-row">
          <img className="mr-4 inline-block h-16 w-16 object-cover rounded-full" src={item.app_logo || '/default-logo.jpg'} alt="App Logo" />
          <div className="ml-5">
            <h5 className="text-lg font-semibold text-gray-900">{item.app_name}</h5>
          </div>
        </div>
        <div>
          <h6 className="font-semibold text-gray-700">Description</h6>
          <p className="mb-4 text-sm text-[#636262]">
            {item.description}</p>
        </div>
      </div>
      </Link>
  )
}