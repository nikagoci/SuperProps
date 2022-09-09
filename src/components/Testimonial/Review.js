import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation'
import PeopleText from "./PeopleText";

const info = {
  first: {
    text: "OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce template with modern and trending design.",
    img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/user1.0e7a5e4d225866e2fc87086fb8fbc601.png",
    author: "Mariana Dickey",
    job: "UI Designer",
  },
  second: {
    text: "We're driven beyond just finishing the projects. We want to find solutions with the assessment. OMG! I cannot believe that I have got a brand new landing page.",
    img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/user2.ac8268ce7dd13711484102441d4b3b30.png",
    author: "Jonathan Taylor",
    job: "CEO at Creativex",
  },
  third: {
    text: "Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.",
    img: "https://superprops-next.vercel.app/_next/static/image/src/common/assets/image/webAppMinimal/user3.408427c33260518b807d08538ca50194.png",
    author: "Krish Kendall",
    job: "Creative Director",
  },
};

const Review = () => {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      spaceBetween={50}
    >
      <SwiperSlide>
        <PeopleText text={info.first.text} img={info.first.img} author={info.first.author} job={info.first.job} />
      </SwiperSlide>
      <SwiperSlide>
        <PeopleText text={info.second.text} img={info.second.img} author={info.second.author} job={info.second.job} />
      </SwiperSlide>
      <SwiperSlide>
        <PeopleText text={info.third.text} img={info.third.img} author={info.third.author} job={info.third.job} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Review;
