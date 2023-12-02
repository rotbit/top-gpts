import { fetchNewestGPTs } from "@/app/lib/data";
import GridItem from "@/app/ui/griditem";
import { useState, useEffect } from "react";


export default function GridList() {
    const [gridItems, setGridItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchNewestGPTs();
            setGridItems(data);
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto py-8 max-w-7xl">
            <p className="text-lg font-semibold text-gray-800 mb-4">Newst GPTs</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Array.isArray(gridItems) && gridItems.map((item) => (
                    <GridItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}