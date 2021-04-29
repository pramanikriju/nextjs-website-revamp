
export default function Footer(){
    return (
        <div className=" md:bg-gradient-to-r from-gray-100  md:mt-16">
            <div className=" py-8 md:py-16 px-16 ">
            <div className="grid grid-cols-1 md:grid-cols-4 place-content-center gap-8">
                <div>
                <h1 className="text-4xl font-bold main-text">Riju Pramanik</h1>
                <p className="md:mt-10">
                    &copy; 2021 All Rights Reserved
                </p>
                </div>
                <div>
                    <ul>
                        <li>Designed with ❤ using NextJS and Tailwind.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                    </ul>
                </div>
            </div>
        </div>
    
        </div>
    );
}