import './Footer.css';

function Footer() {
  return (
    <div className='footer-wrapper'>
      <div className="footer">
        <div className="top-footer">
            <div className="footer-left">
                <h3>FOLLOW US</h3>
                <div className="social">
                    <img src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
                    <img src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
                </div>
            </div>
            <div className="footer-center">
                <h3>HELP</h3>
                <p>SHIPPING & DELIVERY</p>
                <p>RETURNS & EXCHANGE</p>
                <p>START A RETURN</p>
                <p>SHOP PAY INSTALLMENTS</p>
                <p>CONTACT US</p>
                <p>LEAVE US FEEDBACK</p>
                <p>SELL ON BLUEFLY</p>
                <p>TERMS & CONDITIONS</p>
                <p>PRIVACY POLICY</p>
                <p>DO NOT SELL MY PERSONAL INFORMATION</p>
            </div>
            <div className="footer-right">
                <h3>NEWSLETTER</h3>
                <p>PROMOTIONS, NEW PRODUCTS, AND SALES. DIRECTLY TO YOUR INBOX.</p>
                <div className='footer-email'>
                    <input type="email" name="email" className="email" placeholder='EMAIL' />
                    <img src="https://img.icons8.com/ios-filled/50/long-arrow-right.png" alt="long-arrow-right"/>
                </div>
            </div>
        </div>
        <div className="bottom-footer">
            <div className="bottom-upper-footer">
                <img src="https://img.icons8.com/color/48/american-express-squared.png" alt="american-express-squared"/>
                <img src="https://img.icons8.com/external-those-icons-fill-those-icons/50/external-Apple-Pay-payment-methods-those-icons-fill-those-icons.png" alt="external-Apple-Pay-payment-methods-those-icons-fill-those-icons"/>
                <img src="https://img.icons8.com/color/48/mastercard.png" alt="mastercard"/>
                <img src="https://img.icons8.com/color/48/rupay.png" alt="rupay"/>
                <img src="https://img.icons8.com/color/48/google-pay-india.png" alt="google-pay-india"/>
                <img src="https://img.icons8.com/color/48/paypal.png" alt="paypal"/>
                <img src="https://img.icons8.com/color/48/visa.png" alt="visa"/>
                <img src="https://img.icons8.com/ios-filled/50/bank-card-back-side.png" alt="bank-card-back-side"/>
            </div>
            <div className="bottom-lower-footer">
                <img src="https://img.icons8.com/ios/50/creative-commons--v1.png" alt="creative-commons--v1"/>
                <p>2024, BLUEFLY CLONE BUILT BY HRITHIK SAXENA</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
