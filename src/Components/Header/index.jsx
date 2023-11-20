import React from 'react'
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Header = () => {
  return (
    <>
    <div className='swipper_header'>
    <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-img2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/h4-rev-img4a.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
      </div>
    </>
  )
}

export default Header
