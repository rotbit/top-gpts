import Image from "next/image"
export default function Footbar() {
    return (
        <footer className="bg-black text-[#bcb9b9]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <div className="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start">
            <div className="w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial max-[767px]:mr-0">
                <h2 className="text-3xl font-semibold text-white md:text-5xl">
                <span className="text-[#1353fe]">Find Top GPTs </span> | We collect the best GPTs in the world.
                </h2>
            </div>
            <div className="max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:ml-0 max-[767px]:mt-8">
                <div className="mb-4 flex max-w-[272px] items-start justify-start">
                <Image src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639973cbfd61dff0af234a64_Message.svg" alt="" className="mr-3 inline-block w-6" />
                <p>pzbstu@gmail.com</p>
                </div>
                <div className="mb-4 flex max-w-[272px] items-start justify-start">
                    <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639973cafd61df1f2a234a2c_carbon_location-filled.svg" alt="" className="mr-3 inline-block w-6" />
                    <p className="text-[#bcb9b9] max-[px]:text-sm">Data provided by <a href="https://www.gptshunter.com/" className="text-blue-600 hover:text-blue-800">GPTsHunter.com</a></p>
        </div>
            </div>
            </div>
            <div className="mb-14 mt-16 w-full [border-bottom:1.7px_solid_rgb(0,_0,_0)]"></div>
            <div className="flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
            <div className="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1 max-[479px]:mb-4 sm:text-center">
                <a href="#" className="inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#d6a701] sm:py-2 sm:pr-6 lg:pr-12">About</a>
                <a href="#" className="inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#d6a701] sm:py-2 sm:pr-6 lg:pr-12">Privacy</a>
                <a href="#" className="inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#d6a701] sm:py-2 sm:pr-6 lg:pr-12">Works</a>
                <a href="#" className="inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#d6a701] sm:py-2 sm:pr-6 lg:pr-12">Support</a>
                <a href="#" className="inline-block py-1.5 pl-0 pr-6 font-normal text-[#bcb9b9] transition hover:text-[#d6a701] sm:py-2 sm:pr-6 lg:pr-12">Help</a>
            </div>
            <div className="max-[991px]:flex-none">
                <p className="text-[#bcb9b9] max-[479px]:text-sm">© Copyright 2023. All rights reserved.</p>
            </div>
            </div>
        </div>
        </footer>
    )
}