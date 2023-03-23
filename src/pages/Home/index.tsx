const Home = () => {
    return (
        <div className="bg-gradient-to-b from-main-500 to-main-100">
            <div className="w-full py-40">
                <div className="container mx-auto flex justify-center">
                    <div className="flex flex-col justify-center w-[40%]">
                        <h1 className="text-[48px] text-white font-bold font-roboto">Make Quick and Easy Payments with <span className="font-staatliches text-main-300">QuickPayr</span>...</h1>
                        <p className="text-white font-roboto text-[24px]">Streamline Your Payment Process with QuickPayr</p>
                    </div>
                    <div className="w-[600px] bg-phone-back bg-[length:900px_900px] bg-center bg-no-repeat">
                        <img src="../phone.png" className="w-full h-full relative" alt="phone" />    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;