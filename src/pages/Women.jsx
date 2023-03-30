import { Navbar } from "./Navbar"
import '../Style/womenStyle.css'
// import { useState } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";


export const Women = () =>{
// const [show,setShow] = useState(true);
// var value = 0;

// window.addEventListener('scroll',function(){
// if(window.scrollY > 200){
//     setShow(false)
// }
// if(value > window.scrollY){
//     setShow(true)
// }
// console.log(window.scrollY,'-',value)
// console.log(show)
//  console.log(Math.floor(window.scrollY),'-',value)
// value = window.scrollY;
// })


return (
    <div>
    <Navbar/>
    <div className="content_1">
    <div className="content_1_01">
        <div><Link to="/men">MEN</Link></div>
        <div>UP TO 70% OFF THE SALE! <br />It's a treat-yo'self day</div>
        <div><Link to="/">WOMEN</Link></div>
    </div>
    <div className="content_1_02">
    <button>SALE</button>
    <h1>UP TO 70% OFF THE SALE!</h1>
    <h3>It's a treat-yo'self day</h3>
    <p>Limited time only. Selected styles marked down as shown.</p>
    </div>
    <div className="content_1_03">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={13}
    breakpoints = {{
        1200: {
        slidesPerView: 6,
        },
        1000: {
        slidesPerView: 4,
        },
        450: {
        slidesPerView: 3,
        },
        0: {
        slidesPerView: 1,
        }
        }}
      navigation
      // pagination={{ clickable: true }}
      draggable = {true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide>
    <div className="content_1_031">
        <img src="https://images.asos-media.com/products/ei8th-hour-satin-draped-spilt-side-midi-dress-in-green/203338784-1-midgreen?$n_640w$&wid=513&fit=constrain" alt="1" />
        <p>GLAM GRESS</p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="content_1_031">
        <img src="https://images.asos-media.com/products/mango-ribbed-asymmetric-top-with-side-button-detail-in-bright-yellow/202744155-1-yellow?$n_640w$&wid=513&fit=constrain" alt="2" />
        <p>JERSEY TOPS</p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="content_1_031">
        <img src="https://images.asos-media.com/products/topshop-kort-split-hem-co-ord-jeans-in-turquoise/201848051-1-turquoise?$n_640w$&wid=513&fit=constrain" alt="3" />
        <p>JEANS</p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="content_1_031">
        <img src="https://images.asos-media.com/products/nike-blazer-low-platform-trainers-in-lemon-drop-yellow/202287768-1-yellow?$n_640w$&wid=513&fit=constrain" alt="4" />
        <p>SNEAKERS</p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="content_1_031">
        <img src="https://images.asos-media.com/products/puma-train-black-print-crop-top-in-black/200884093-3?$n_640w$&wid=513&fit=constrain" alt="5" />
        <p>SALE UNDER 20$</p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="content_1_031">
        <img src="https://images.asos-media.com/products/asos-design-knitted-midi-dress-with-ruched-waist-in-orange/200870287-1-orange?$n_640w$&wid=513&fit=constrain" alt="6" />
        <p>DAY DRESSES</p>
    </div>
    </SwiperSlide>
    </Swiper>


    </div>
    <div className="content_1_04">
        <div>VIEW ALL</div>
    </div>
    </div>
    {/* content_2 */}

    <div className="content_2">
    <div className="content_2_1">
    <picture>
        <source media="(max-width: 750px)" srcset="https://content.asos-media.com/-/media/homepages/ww/2023/march/27-prime/hero/ww_global_asos_design_moonwalker_apphero_870x1110.jpg"/>
        <img style={{width:'100%'}} src="https://content.asos-media.com/-/media/homepages/ww/2023/march/27-prime/hero/moonwalker-desktop-standing-3no_logo.jpg" alt=""/>
      </picture>
    </div>
    <div className="content_2_2">
        <div>Day-to-night neutrals</div>
        <button>SHOP ASOS DESIGN</button>
    </div>
    </div>
    {/* content_3 */}

    <div className="content_3">
    <div>
        <img src="https://content.asos-media.com/-/media/homepages/ww/2023/march/27-prime/ww_global_cool_casual_2_moment_870x1110.jpg" alt="1" />
        <h3>THE UTILITY EDIT</h3>
        <p>Denim, dresses & more</p>
    </div>
    <div>
        <img src="https://content.asos-media.com/-/media/homepages/ww/2023/march/27-prime/ww_global_formal_focus_clean_drape_2_moment_870x1110.jpg" alt="2" />
        <h3>FORMAL 'FITS</h3>
        <p>Fancy that</p>
    </div>
    <div>
        <img src="https://content.asos-media.com/-/media/homepages/ww/2023/march/27-prime/ww_global_modest_maxis_2_moment_870x1110.jpg" alt="3" />
        <h3>THE MODEST EDIT</h3>
        <p>Hem-maculate</p>
    </div>
    <div>
        <img src="https://content.asos-media.com/-/media/homepages/ww/2023/march/27-prime/ww_global_new_season_footwear_moment_870x1110.jpg" alt="4" />
        <h3>SPRING SHOES</h3>
        <p>The new-new</p>
    </div>
    </div>
    {/* ---- */}
    <div className="content_4">
    <h2>STYLE FEED</h2>
    <p>Outfit ideas, editor picks, styling inspiration and Face + Body tips</p>
    <div>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
    breakpoints = {{
        1200: {
        slidesPerView: 4,
        },
        900: {
        slidesPerView: 3,
        },
        550: {
        slidesPerView: 2,
        },
        0: {
        slidesPerView: 1,
        }
        }}
      navigation
      draggable = {true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="content_4_1">
        <img style={{width:'100%'}} src="https://content.asos-media.com/-/media/images/articles/women/2023/03/26-sun/hello-natalie---thumb.jpg?h=300&w=300&hash=2E86284CD14CFFF73E4323D847A071D7" alt="4" />
        <div>
        <h3>3 TOP TIPS FOR FINDING <br /> AUTHENTIC VINTAGE</h3>
        <p>W/ ASOS Marketplace pro Caoimhe!</p>
        <h6>March 15, 2023</h6>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="content_4_1">
        <img style={{width:'100%'}} src="https://content.asos-media.com/-/media/images/articles/women/2023/03/18-sat/us-sneakers/sneakerthumb.jpg?h=300&w=300&hash=4AC5FBBF432A23C580C973D3DA4160A7" alt="4" />
        <div>
        <h3>3 TOP TIPS FOR FINDING <br /> AUTHENTIC VINTAGE</h3>
        <p>W/ ASOS Marketplace pro Caoimhe!</p>
        <h6>March 15, 2023</h6>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="content_4_1">
        <img style={{width:'100%'}} src="https://content.asos-media.com/-/media/images/articles/women/2023/03/17-fri/paddy-pics---thumb.jpg?h=300&w=300&hash=EEB367B2CFF99D5C0463D682A255F795" alt="4" />
        <div>
        <h3>3 TOP TIPS FOR FINDING <br /> AUTHENTIC VINTAGE</h3>
        <p>W/ ASOS Marketplace pro Caoimhe!</p>
        <h6>March 15, 2023</h6>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="content_4_1">
        <img style={{width:'100%'}} src="https://content.asos-media.com/-/media/images/articles/women/2023/03/14-tues/thumb.jpg?h=300&w=300&hash=A71FB9F83A49287EF59739114F4C9F54" alt="4" />
        <div>
        <h3>3 TOP TIPS FOR FINDING <br /> AUTHENTIC VINTAGE</h3>
        <p>W/ ASOS Marketplace pro Caoimhe!</p>
        <h6>March 15, 2023</h6>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="content_4_1">
        <img style={{width:'100%'}} src="https://content.asos-media.com/-/media/images/articles/women/2023/03/11-sat/oscars/flothumb.jpg?h=300&w=300&hash=77EF36CBD2716042F2497F70932A4BCD" alt="4" />
        <div>
        <h3>3 TOP TIPS FOR FINDING <br /> AUTHENTIC VINTAGE</h3>
        <p>W/ ASOS Marketplace pro Caoimhe!</p>
        <h6>March 15, 2023</h6>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="content_4_1">
        <img style={{width:'100%'}} src="https://content.asos-media.com/-/media/images/articles/women/2023/03/03-fri/spring---thumb.jpg?h=300&w=300&hash=768A539C331C3CCD1DD66FB682AB282C" alt="4" />
        <div>
        <h3>3 TOP TIPS FOR FINDING <br /> AUTHENTIC VINTAGE</h3>
        <p>W/ ASOS Marketplace pro Caoimhe!</p>
        <h6>March 15, 2023</h6>
        </div>
        </div>
      </SwiperSlide>
      
    </Swiper>
    </div>
    <button>VIEW ALL</button>
    </div>
    {/* constent_5 */}
    <div className="content_5">
      <div>
      <img src="https://content.asos-media.com/-/media/homepages/ww/2023/march/27-prime/ww_global_reclaimed_vintage_miss_selfridge_moment_870x1110-v2.jpg" alt="1" />
      <div>
        <h1>FEELIN' CRAFTY</h1>
        <p>Ft, Reclaimed Vintage & Miss Selfridge</p>
        <button>SHOP NOW</button>
      </div>
      </div>
      <div>
      <img src="https://content.asos-media.com/-/media/homepages/ww/2023/march/27-prime/ww_global_selling_fast_moment_870x1110-v2.jpg" alt="2" />
      <div>
        <h1>SELLING FAST</h1>
        <p>Going, going, GO...</p>
        <button>SHOP NOW</button>
      </div>
      </div>
    </div>
    {/* spotify_banner */}
    <img className="spotify_banner" src="https://assets.asosservices.com/cmsa/img/pdlp/svg/us-spotify-desktop.svg" alt="" />
    {/* content_6 */}
    <div className="content_6">
    <h1>TRENDING BRANDS</h1>
    <div>
      <div>
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/asos-design-logo_256_v4.png" alt="" />
      </div>
      <div>
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png" alt="" />
      </div>
      <div>
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/topman_logo_256x128_v3.png" alt="" />
      </div>
      <div>
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/new-balance-hp-logos-256x256v2.png" alt="" />
      </div>
      <div>
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/jack-jones-hp-logos-256x256.jpg" alt="" />
      </div>
      <div>
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/adidas-hp-logos-256x256---v2.png" alt="" />
      </div>
    </div>
    </div>
    {/* content_7 */}
    <div className="content_7">
    <h1>TOP MEN'S CATEGORIES</h1>
    <div>
    <p>Men's Chelsea Boots</p>
    <p>Men's Cardigans</p>
    <p> Men's Sweater Vests</p>
    <p>Men's Skinny Jeans</p>
    <p>Men's Slim Jeans</p>
    <p>Men's Chinos</p>
    <p>Men's Onesies</p>
    <p>Men's Hiking Boots</p>
    <p>Men's Ripped Jeans</p>
    <p>Desert Boots</p>
    <p>Men's Birthday Gifts</p>
    <p>Men's Bucket Hats</p>
    <p>Men's Designer Watches</p>
    <p>Men's White Jeans</p>
    <p>Men's Denim Shirts</p>
    <p>Men's Underwear & Socks</p>
    <p>Men's Denim Jackets</p>
    <p>Men's Casual Shirts</p>
    <p>Tuxedos</p>
    <p>Chukka Boots</p>
    </div>
    </div>
    {/* footer */}
      <hr />
    <footer>
      <div className="footer_1">
        <div>
        <img src="https://images.asos-media.com/navigation/visa-png" alt="1" />|
        <img src="https://images.asos-media.com/navigation/mastercard-png" alt="2" />|
        <img src="https://images.asos-media.com/navigation/pay-pal-png" alt="3" />|
        <img src="https://images.asos-media.com/navigation/klarna-gb-png" alt="4" />|
        <img src="https://images.asos-media.com/navigation/apple-pay-png" alt="5" />|
        <img src="https://images.asos-media.com/navigation/afterpay_new-png" alt="6" />
      </div>
      </div>
    <div className="footer_2">
      <div>
        <h1>HELP AND INFORMATION</h1>
        <p>Help</p>
        <p>Track Order</p>
        <p>Delivery & returns</p>
        <p>ASOS Premier</p>
        <p>10% Student Discount</p>
        <p>Sitemap</p>
      </div>
      <div>
        <h1>ABOUT ASOS</h1>
        <p>About us</p>
        <p>Careers at ASOS</p>
        <p>Corporate responsibility</p>
        <p>Investors' site</p>
      </div>
      <div>
        <h1>MORE FROM ASOS</h1>
        <p>Mobile and ASOS apps</p>
        <p>ASOS Marketplace</p>
        <p>E-gift cards</p>
        <p>Black Friday</p>
        <p>Refer A Friend</p>
      </div>
      <div>
        <h1>SHOPPING FROM:</h1>
        <p>You're in 
        <img style={{width:'15px',height:'25px',borderRadius:'100%'}} src="https://th.bing.com/th?id=OIP.xQkGylUPlIh97Lj2yIsxWgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" /> 
        | CHANGE
        </p>
      </div>
    </div>
    <div className="footer_3">
    <div>© 2023 ASOS</div>
    <div>Privacy & Cookies | Ts&Cs | Accessibility</div>
    </div>
    </footer>
    </div>
)
}