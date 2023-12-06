import React, { useRef, useState } from "react";
import Slider2 from "../../components/client/Slider2.jsx"
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "antd";

import "swiper/css";
const { Meta } = Card;

import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Collapse } from "antd";
const text = `
  A dog is a type of domesticated animal.
  
`;
const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "This is panel header 4",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "This is panel header 5",
    children: <p>{text}</p>,
  },
  {
    key: "6",
    label: "This is panel header 6",
    children: <p>{text}</p>,
  },
  {
    key: "7",
    label: "This is panel header 7",
    children: <p>{text}</p>,
  },
];
export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/adopted/img/slider-1.jpg.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/adopted/img/slider-2.jpg.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div className="steps">
        <Card
          cover={
            <img
              alt="example"
              src="https://static.vecteezy.com/system/resources/previews/024/758/643/original/happy-family-parents-mom-dad-and-kid-transparent-background-free-png.png"
            />
          }
        >
          <Meta
            title="Europe Street beat"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo et, esse laudantium consequatur. Eum soluta illum architecto dolorum quae suscipit dignissimos! Saepe, amet explicabo nemo eligendi totam sint repudiandae."
          />
          <button>Adopt child now</button>
        </Card>
        <div className="accordion">
          <h1>Steps to adopt & foster a child</h1>
          <Collapse accordion items={items} />{" "}
        </div>
      </div>

      <div className="waitingChildren">
        <h2>WAITING CHILDREN</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde
          impedit, necessitatibus, soluta sit quam minima expedita atque
          corrupti reiciendis.
        </p>
        <button>Find More Waiting Children </button>

            <Slider2/>
        
      </div>
    </>
  );
}
