export default function Searchbar() {
    return (
        <div className="py-4 mx-auto max-w-7xl">
        <div className="text-black text-center py-10">
          <h1 className="text-4xl font-bold mb-3">Top GPTs In the world</h1>
          <p className="text-lg">find the bestest GPT in internet.</p>
          <p className="text-sm uppercase tracking-widest mt-3">Updated daily.</p>
        </div>
  
        <div className="flex justify-center">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <a href="#">
              <svg className="h-5 w-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M11 4a7 7 0 00-7 7 7 7 0 007 7 7 7 0 007-7 7 7 0 00-7-7z"></path>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
            </a>
          </div>
          <input id= "search" type="search" disabled className="w-full bg-white text-gray-700 border-2 border-blue-300 rounded-full py-3 pl-10 pr-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" placeholder="Feature Coming Soon..." />
        </div>
      </div>
  
      </div>
    )
}