export default function GridItem({ item }) {
    return (
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
          <div className="px-4 py-5">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <img className="h-16 w-16 rounded-full" src={item.logo || '/default-logo.jpg'} alt="App Logo"/>
              </div>
              <div className="ml-4">
                <h5 className="text-lg font-semibold text-gray-900">{ item.title }</h5>
              </div>
            </div>
            <div>
              <div className="h-24 overflow-hidden">
              <h6 className="font-semibold text-gray-700">Description</h6>
              <p className="text-gray-600 text-sm">{ truncate(item.text, 128) }</p>
            </div>
            </div>
          </div>
      </div>
    )
}

function truncate(str, n){
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
}