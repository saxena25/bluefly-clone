import "./Banners.css";

function Banners() {
  return (
    <div className='banners-wrapper'>
      <div className="banners">
        <div className='banner-top'>
            <img src="https://www.bluefly.com/cdn/shop/files/Fall_Into_Savings_BANNER_1200X120_66ef4303-ee23-436a-8414-cf4615bfb301.jpg?v=1727383860&width=1200" alt="extra 15% off banner" />
        </div>
        <div className="banner-center">
            <img src="https://www.bluefly.com/cdn/shop/files/5_SHIPPING_PROMO_1200X200_52ec07bc-4e53-4782-982c-5d4707f1b89b.png?v=1725371398&width=1200" alt="$5 shipping banner" />
        </div>
      </div>
    </div>
  )
}

export default Banners
