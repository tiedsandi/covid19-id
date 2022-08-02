import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./swiper.scss";
// import required modules
import { FreeMode } from "swiper";


const SwiperSlider = () => {
    return (
        <div className="swiper-slider">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slide-item">
                        <img src="./images/cucitangan.png" alt="" />
                        <p>Cuci Tangan</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <img src="./images/masker.png" alt="" />
                        <p>Pakai Masker</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <img src="./images/jagajarak.png" alt="" />
                        <p>Jaga Jarak</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <img src="./images/vaksin.png" alt="" />
                        <p>Vaksin</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <img src="./images/cucitangan.png" alt="" />
                        <p>Cuci Tangan</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperSlider
