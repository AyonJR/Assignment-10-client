import { Typewriter } from 'react-simple-typewriter'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/s5fD591/giau-tran-zmdxvd6jgww-unsplash.jpg" className="w-full lg:h-[100vh] filter brightness-75" style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))' }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn glass  ">❮</a>
                        <a href="#slide2" className="btn glass ">❯</a>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-normal">
                        <Typewriter
                            words={['Exploring the World.....']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/VN6GNPp/Philippines-scaled.jpg" className="w-full lg:h-[100vh] filter brightness-60" style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))' }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn glass ">❮</a>
                        <a href="#slide3" className="btn glass ">❯</a>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-normal">
                        <Typewriter
                            words={['Exploring the World.....']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/syQX3dF/Halong-Bay-best-places-to-visit-in-Southeast-Asia.jpg" className="w-full lg:h-[100vh] filter brightness-60" style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))' }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn  glass ">❮</a>
                        <a href="#slide1" className="btn glass ">❯</a>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-normal">
                        <Typewriter
                            words={['Exploring the World.....']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slider;
