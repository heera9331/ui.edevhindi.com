"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

const ImageSlider = () => {

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <Image
                    className="object-cover mb-4 rounded-lg hover:scale-[102%] transition transition-all delay-150"
                    src={`https://edevhindi.com/wp-content/uploads/2024/10/Screenshot-from-2024-10-06-23-19-08.png`}
                    alt="heera portfolio"
                    width={1000}
                    height={1000}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className="object-cover mb-4 rounded-lg hover:scale-[102%] transition transition-all delay-150"
                    src={`https://edevhindi.com/wp-content/uploads/2024/10/Screenshot-from-2024-10-06-23-58-38.png`}
                    alt="heera singh portfolio"
                    width={1000}
                    height={1000}
                />
            </SwiperSlide> 
        </Swiper>
    );
}


export default ImageSlider;