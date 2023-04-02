import '../Style/womenStyle.css'

export const Footer = () =>{
return (
    <div>
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