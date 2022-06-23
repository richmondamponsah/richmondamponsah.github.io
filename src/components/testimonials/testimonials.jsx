import React from "react";
import "./testimonials.css";
// import Images
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const test = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquam obcaecati tenetur in eum explicabo molestiae voluptatibus odio inventore, debitis ullam ad cumque, deleniti tempora autem esse quo expedita sapiente.",
  },
  {
    avatar: AVTR2,
    name: "kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquam obcaecati tenetur in eum explicabo molestiae voluptatibus odio inventore, debitis ullam ad cumque, deleniti tempora autem esse quo expedita sapiente.",
  },
  {
    avatar: AVTR3,
    name: "Shatta wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquam obcaecati tenetur in eum explicabo molestiae voluptatibus odio inventore, debitis ullam ad cumque, deleniti tempora autem esse quo expedita sapiente.",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquam obcaecati tenetur in eum explicabo molestiae voluptatibus odio inventore, debitis ullam ad cumque, deleniti tempora autem esse quo expedita sapiente.",
  },
];

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonial__container'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      
      
        
        {
        test.map(({ avatar, name, review, index }) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avater'>
                <img src={avatar} alt='Client1' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  );
};

export default testimonials;
