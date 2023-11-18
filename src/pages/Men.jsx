import { Navbar } from "./Navbar"
import '../Style/womenStyle.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Footer } from "./Footer";

export const Men = () => {

  return (
    <div>
      <Navbar />
      <div className="content_1" style={{ backgroundImage: 'linear-gradient(180deg, #1efca3 0%, #c2edff 100%)' }}>
        <div className="content_1_01">
          <div><Link to="/">WOMEN</Link></div>
          <div>UP TO 70% OFF THE SALE! <br />It's a treat-yo'self day</div>
          <div><Link to="/men">MEN</Link></div>
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
            breakpoints={{
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
            draggable={true}
            color="white"
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="content_1_031">
              <Link to={'/men-product/Shorts'}>
                <img src="https://images.asos-media.com/products/asos-design-classic-rigid-denim-short-in-washed-black/201662312-1-washedblack?$n_640w$&wid=513&fit=constrain" alt="1" />
                <p>SHORTS</p>
              </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content_1_031">
              <Link to={'/men-product/Tracksuits'}>
                <img src="https://images.asos-media.com/products/ben-sherman-slim-suit-jacket-in-lilac/202488042-4?$n_640w$&wid=513&fit=constrain" alt="2" />
                <p>TAILORING</p>
              </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content_1_031">
              <Link to={'/men-product/Shirt'}>
                <img src="https://images.asos-media.com/products/obey-receptor-jacquard-knitted-t-shirt-in-multi/202323999-1-multi?$n_640w$&wid=513&fit=constrain" alt="3" />
                <p>TEES</p>
              </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content_1_031">
              <Link to={'/men-product/shoes'}>
                <img src="https://images.asos-media.com/products/nike-dunk-high-retro-se-sneakers-in-white/203509671-2?$n_480w$&wid=476&fit=constrain" alt="4" />
                <p>SNEAKERS</p>
              </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content_1_031">
              <Link to={'/men-product/jacket'}>
                <img src="https://images.asos-media.com/products/adpt-oversized-felted-overshirt-in-beige/203834673-1-crockery?$n_320w$&wid=317&fit=constrain" alt="5" />
                <p>JACKETS</p>
              </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content_1_031">
              <Link to={'/men-product/T-shirt'}>
                <img src="https://images.asos-media.com/products/topman-viscose-revere-shirt-in-multi-colour-bandana-print/202537544-1-multicolour?$n_640w$&wid=513&fit=constrain" alt="6" />
                <p>SHIRTS</p>
              </Link>
              </div>
            </SwiperSlide>
          </Swiper>


        </div>
        <div className="content_1_04">
          <div><Link to={'/men-product/jacket'}>VIEW ALL</Link></div>
        </div>
      </div>
      {/* content_2 */}

      <div className="content_2">
        <div className="content_2_1">
          <img style={{ width: '100%' }} src="https://content.asos-media.com/-/media/hubs/topshop-topman/tstm-march-april-2023/prime-heros/tm/uk-us-row/tm_hero_hp.jpg" alt="" />
        </div>
      </div>
      {/* content_3 */}

      <div className="content_3">
        <div>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2023/march/27-prime/bau-prime/mw_global_columbia_moment_870x1110.jpg" alt="1" />
          <h3>COLUMBIA</h3>
          <p>Logo Love</p>
        </div>
        <div>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2023/march/27-prime/bau-prime/mw_global_shorts_from_20_moment_870x1110.jpg" alt="2" />
          <h3>SHORTS FROM 35$</h3>
          <p>You Knee'd these</p>
        </div>
        <div>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2023/march/27-prime/bau-prime/mw_global_casual_summer_shirts_gbl_moment_870x1110.jpg" alt="3" />
          <h3>CASUAL SHIRTS</h3>
          <p>Prints came to play</p>
        </div>
        <div>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2023/march/27-prime/bau-prime/mw_global_summer_footwear_moment_870x1110.jpg" alt="4" />
          <h3>SPRING SHOES</h3>
          <p>Slide into the szn</p>
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
            breakpoints={{
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
            draggable={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="content_4_1">
                <img style={{ width: '100%' }} src="https://content.asos-media.com/-/media/images/articles/men/2023/03/18-sat/us-sneakers/thumbmw.jpg?h=300&w=300&hash=767F7127D197CD1A1D7A3518B37B8737" alt="4" />
                <div>
                  <h3>3 TOP TIPS FOR FINDING <br /> AUTHENTIC VINTAGE</h3>
                  <p>W/ ASOS Marketplace pro Caoimhe!</p>
                  <h6>March 15, 2023</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content_4_1">
                <img style={{ width: '100%' }} src="https://content.asos-media.com/-/media/images/articles/men/2023/03/17-fri/st-paddy--thumb.jpg?h=300&w=300&hash=A1877253DBF348ED4569D5D5870E12D6" alt="4" />
                <div>
                  <h3>3 TOP TIPS FOR FINDING <br /> AUTHENTIC VINTAGE</h3>
                  <p>W/ ASOS Marketplace pro Caoimhe!</p>
                  <h6>March 15, 2023</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content_4_1">
                <img style={{ width: '100%' }} src="https://content.asos-media.com/-/media/images/articles/men/2023/03/10-fri/mw-oscars/paulthumb.jpg?h=300&w=300&hash=547704672FF5639339A1F7F610BB6AAF" alt="4" />
                <div>
                  <h3>3 TOP TIPS FOR FINDING <br /> AUTHENTIC VINTAGE</h3>
                  <p>W/ ASOS Marketplace pro Caoimhe!</p>
                  <h6>March 15, 2023</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content_4_1">
                <img style={{ width: '100%' }} src="https://content.asos-media.com/-/media/images/articles/men/2023/03/03-fri/thmb2.jpg?h=300&w=300&hash=67D600A04831E0AC95D317A1F7BC7703" alt="4" />
                <div>
                  <h3>3 TOP TIPS FOR FINDING <br /> AUTHENTIC VINTAGE</h3>
                  <p>W/ ASOS Marketplace pro Caoimhe!</p>
                  <h6>March 15, 2023</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content_4_1">
                <img style={{ width: '100%' }} src="https://content.asos-media.com/-/media/images/articles/men/2023/02/28-mon/us-top-10/thumbmw.jpg?h=300&w=300&hash=68885D746E886BE0274CDB92146432C9" alt="4" />
                <div>
                  <h3>3 TOP TIPS FOR FINDING <br /> AUTHENTIC VINTAGE</h3>
                  <p>W/ ASOS Marketplace pro Caoimhe!</p>
                  <h6>March 15, 2023</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content_4_1">
                <img style={{ width: '100%' }} src="https://content.asos-media.com/-/media/images/articles/men/2023/02/20-mon/gettyimages-1247315886.jpeg?h=300&w=300&hash=83A1472DB201A29BB22F871547735CEE" alt="4" />
                <div>
                  <h3>3 TOP TIPS FOR FINDING <br /> AUTHENTIC VINTAGE</h3>
                  <p>W/ ASOS Marketplace pro Caoimhe!</p>
                  <h6>March 15, 2023</h6>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
        <button><Link to={'/men-product/Tracksuits'}>VIEW ALL</Link></button>
      </div>
      {/* constent_5 */}
      <div className="content_5">
        <div>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2023/march/27-prime/bau-prime/mwglobalweddingsmarttailoringmoment870x1110.jpg" alt="1" />
          <div>
            <h1>BEST-DRESSED GUEST</h1>
            <p>Not upstaging, but nearly</p>
            <button><Link to={'/men-product/jacket'}>SHOP NOW</Link></button>
          </div>
        </div>
        <div>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2023/march/27-prime/bau-prime/mw_global_reclaimed_vintage_moment_870x1110.jpg" alt="2" />
          <div>
            <h1>RECLAIMED VINTAGE</h1>
            <p>Old skl meets new</p>
            <button><Link to={'/men-product/T-shirt'}>SHOP NOW</Link></button>
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
      <Footer/>

    </div>
  )
}