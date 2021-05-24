
export default function Card(){
    return (
        <div className="w-full bg-white max-w-64 rounded overflow-hidden shadow-lg transform-gpu md:hover:scale-105	 transition-transform content-center">
            <img className="w-full" src="https://placedog.net/300" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                Some quick example text
                </p>
            </div>
            <div className="px-6 py-4">
                <button className="bg-blue-800 py-2 px-2 rounded text-white">Go Somewhere</button>
            </div>
        </div>
    );
}