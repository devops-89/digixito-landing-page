"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { proofSlides } from "@/lib/constant";
import {
  ProofHeader,
  ProofSliderControls,
  TestimonialCard,
  ApproachCard,
  LogoStrip,
} from "@/components/proof";

export default function ClientProof() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="proof-section" id="proof">
      <ProofHeader />

      <ProofSliderControls
        onPrev={() => swiperInstance?.slidePrev()}
        onNext={() => swiperInstance?.slideNext()}
        isBeginning={isBeginning}
        isEnd={isEnd}
      />

      <div className="proof-swiper-container reveal-on-scroll reveal-delay-2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1.2,
              spaceBetween: 28,
            },
            1080: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
          }}
          pagination={{
            clickable: true,
            el: ".proof-swiper-pagination",
          }}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="proof-swiper"
        >
          {proofSlides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="proof-slide"
              style={{ height: "auto", display: "flex" }}
            >
              {slide.isApproach ? (
                <ApproachCard slide={slide} />
              ) : (
                <TestimonialCard slide={slide} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="proof-swiper-pagination" />
      </div>

      <LogoStrip />
    </section>
  );
}
