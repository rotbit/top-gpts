import { fetchNewestGPTs } from "@/app/lib/data";
import GridItem from "@/app/ui/griditem";
import React from "react";  

export default async function GridList() {
    const gridItems = await fetchNewestGPTs();
    return (
        <div className="container mx-auto py-8 max-w-7xl">
            <p className="text-lg font-semibold text-gray-800 mb-4">Newest GPTs Today</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Array.isArray(gridItems) && gridItems.map((item) => (
                    <GridItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}