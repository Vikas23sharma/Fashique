import '../Style/Sidebar.css'
import { Link } from 'react-router-dom'


export const SidebarMen = () =>{
let isAuth = JSON.parse(localStorage.getItem("isAuth"))


return (
    <div className='sidebar_1'>
    <div>
    <a href="#">
    <Link to={'/men'}>
    <p style={{top:'17px'}}>HOME</p>
    <img src="https://images.asos-media.com/navigation/mw_homebuttonnew_1826147?&amp;$n_320w$&quot" alt="home" />
    </Link>
    </a>
    </div>
    <div>
    <a href="#">
        <p>SALE UP TO 70%</p>
        <img src="//images.asos-media.com/navigation/gradient_1_1m_041021?&amp;$n_320w$&quot" alt="" />
    </a>
    </div>
    <div>
    <a href="#">
    <p>NEW IN</p>
    <img src="https://images.asos-media.com/navigation/mw_toplevel_newin_1M_123786608?&amp;$n_320w$&quot" alt="" />
    </a>
    </div>
    <div>
    <a href="#">
        <p>CLOTHING</p>
        <img src="//images.asos-media.com/navigation/mw_bestsellers_US_1m_121933377?&amp;$n_320w$&quot" alt="" />
    </a>
    </div>
    <div>
    <a href="#">
        <p>BESTSELLING</p>
        <img src="https://images.asos-media.com/navigation/mw_brands_topman_shop_all_4WL_121401532?&amp;$n_320w$&quot" alt="" />
    </a>
    </div>
    <div>
    <a href="#">
        <p>ACTIVEWEAR</p>
        <img src="//images.asos-media.com/navigation/mw_activewear_US_1m_123343344?&amp;$n_320w$&quot" alt="" />
    </a>
    </div>
    <div>
    <a href="#">
        <p>SNEAKERS</p>
        <img src="//images.asos-media.com/navigation/mw_sneakers_US_1m_124078350?&amp;$n_320w$&quot" alt="" />
    </a>
    </div>
    <div>
    <a href="#">
        <p>SHOES</p>
        <img src="//images.asos-media.com/navigation/mw_shoes_toplevel_gbl_1m_106368733?&amp;$n_320w$&quot" alt="" />
    </a>
    </div>
    <div>
    <a href="#">
        <p>SUMMER</p>
        <img src="//images.asos-media.com/navigation/mw_spring_springcontainer_1M_122763374?&amp;$n_320w$&quot" alt="" />
    </a>
    </div>
    <div>
    <a href="#">
        <p>TAILORING</p>
        <img src="//images.asos-media.com/navigation/mw_spring_springcontainer_1M_122763374?&amp;$n_320w$&quot" alt="" />
    </a>
    </div>
    <div>
    <a href="#">
        <p>JEANS</p>
        <img src="//images.asos-media.com/navigation/mw_jeans_US_1m_1864772?&amp;$n_320w$&quot" alt="" />
    </a>
    </div>
    <div>
    <a href="#">
        <p>ACCESSORIES</p>
        <img src="//images.asos-media.com/navigation/mw_accesories_US_1m_123000452?&amp;$n_320w$&quot" alt="" />
    </a>
    </div>
    <div>
    <a href="#">
        <p>PLUS & TALL</p>
        <img src="//images.asos-media.com/navigation/mw_plus%26tall_US_1m_128827670?&amp;$n_320w$&quot" alt="" />
    </a>
    </div>
    <div>
    <a href="#">
        <p>BREANDS</p>
        <img src="//images.asos-media.com/navigation/mw_brands_US_1m_122680716?&amp;$n_320w$&quot" alt="" />
    </a>
    </div>

    <div className='side_1_bottom'>
    {!isAuth?
    <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'1.5cm'}}>
        <p><Link to={'/login'}>Sign In</Link></p>
        <p>|</p>
        <p><Link to={'/login'}>Join</Link></p>
    </div>:
    <div><h5 style={{border:'1px solid rgb(6, 182, 252)',cursor:'pointer',color:'rgb(6, 182, 252)',width:'85%',margin:' 0.5cm auto 0 auto',textAlign:'center',padding:'7px'}}>
    LOG OUT
    </h5>
    </div>
    }
    <div className='side_info'>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
    </svg>
    <h4><Link to={'/account'}>My Account</Link></h4>
    </div>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box2" viewBox="0 0 16 16">
    <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z"/>
    </svg>
    <h4>My Order</h4>
    </div>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">
    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
    </svg>
    <h4><Link to={'/admin'}>Admin</Link></h4>
    </div>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
    <h4>My Return</h4>
    </div>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
    </svg>
    <h4>Contact</h4>
    </div>
    </div>
    </div>
    
    </div>
)
}