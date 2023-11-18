import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";




export const Slider = () => {
  return (
    <div style={{ width: "90%",height:'300px', margin: "auto" ,marginTop:"50px",marginBottom:"50px"}}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={13}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 3,
          },
          450: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        navigation
        // pagination={{ clickable: true }}
        draggable={true}
        color="white"
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="content_1_031">
            <img style={{width:'250px',height:'300px'}}
              src="https://images.asos-media.com/groups/river-island-textured-suit-in-light-gray/113682-group-1?$n_320w$&wid=317&fit=constrain"
              alt="1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_1_031">
          <img style={{width:'250px',height:'300px'}}
              src="https://images.asos-media.com/products/asos-design-v-neck-crochet-top-with-frill-sleeve-and-peplum-hem-in-white/202100893-1-white?$n_320w$&wid=317&fit=constrain"
              alt="2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_1_031">
          <img style={{width:'250px',height:'300px'}}
              src="https://images.asos-media.com/products/reclaimed-vintage-unisex-mushroom-badge-sweater/201698331-2?$n_320w$&wid=317&fit=constrain"
              alt="3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_1_031">
          <img style={{width:'250px',height:'300px'}}
              src="https://images.asos-media.com/products/asos-design-x-millie-puff-sleeve-crop-top-in-linen-tie-dye-print-part-of-a-set/202322480-1-multi?$n_320w$&wid=317&fit=constrain"
              alt="4"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_1_031">
          <img style={{width:'250px',height:'300px'}}
              src="https://images.asos-media.com/products/the-north-face-tri-blend-t-shirt-in-white/201663653-1-white?$n_320w$&wid=317&fit=constrain"
              alt="5"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_1_031">
          <img style={{width:'250px',height:'300px'}}
              src="https://images.asos-media.com/products/asos-luxe-chiffon-ruched-corset-mini-dress-in-pink-floral/202389764-2?$n_320w$&wid=317&fit=constrain"
              alt="6"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_1_031">
          <img style={{width:'250px',height:'300px'}}
              src="https://images.asos-media.com/products/jack-jones-originals-zip-up-twill-overshirt-in-beige/203671296-1-moonbeam?$n_320w$&wid=317&fit=constrain"
              alt="7"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content_1_031">
          <img style={{width:'250px',height:'300px'}}
              src="https://images.asos-media.com/products/asos-design-linen-look-trench-coat-in-natural/203826406-2?$n_320w$&wid=317&fit=constrain"
              alt="8"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
