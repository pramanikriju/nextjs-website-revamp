
export default function CardAlt(){
    return (
        <div className="w-full max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex border-2 border-primary-green">
        <div className="w-full sm:w-1/3">
          <img className="object-cover w-full h-full" src="https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Flower and sky"/>
        </div>
        <div className="flex-1 px-6 py-4">
          <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
          <p className="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
        </div>
      </div>
    );
}