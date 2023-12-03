import { fetchCategories } from "@/app/lib/data";
import React from "react";
import Link from "next/link";

export default async function Category() {
    const categories = await fetchCategories();
    return (
        <div className="py-2 mx-auto max-w-7xl">
        <div className="flex justify-center">
          <div className="relative w-full">
            <div className="flex flex-wrap space-x-2 overflow-x-auto">
                {Array.isArray(categories) && categories.map((category) => (
                    <Link key={category} href={`/category/${category}`}>
                        <p className="inline-block px-3 py-1 my-1 text-sm font-semibold text-gray-800 bg-gray-400 rounded-full hover:bg-gray-300">{category}</p>
                    </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    )
}