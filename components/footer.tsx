export default function Footer(){
    return (
        <div className=" md:bg-gradient-to-r from-gray-100  md:mt-16">
            <div className=" py-8 md:py-16 px-16 ">
            <div className="grid grid-cols-1 md:grid-cols-3 place-content-center gap-8">
                <div className="text-center md:order-first order-last">
                    <h1 className="text-4xl font-bold main-text">Riju Pramanik</h1>
                    <p className="md:mt-5">
                        &copy; 2021 All Rights Reserved
                    </p>
                </div>
                <div>
                    <ul>
                        <li>Designed with <span className="text-red-500">❤</span> using <span className="main-text font-bold">NextJS</span> and  <span className="main-text font-bold">
                        Tailwind</span>.</li>
                        <li>Payments powered by <span className="text-gray-500 font-bold">RazorPay™</span></li>
                    </ul>
                </div>
            </div>
        </div>
    
        </div>
    );
}