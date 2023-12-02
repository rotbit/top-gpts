import { fetchNewestGPTs } from "@/app/lib/data";
import GridItem from "@/app/ui/griditem";
import React from "react";

export default async function GridList() {
    const gridItems = await fetchNewestGPTs();
    return (
        <section className="relative">
            <div className="container mx-auto py-8 max-w-7xl">
                <p className="text-lg font-semibold text-gray-800 mb-4">Newest GPTs Today</p>

                <div className="mb-8 gap-5 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
                    {Array.isArray(gridItems) && gridItems.map((item) => (
                        <GridItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}