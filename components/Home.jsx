import Banners from "./Banners";
import Footer from "./Footer";
import "./Home.css";

function Home() {
    const cards = [
        {
            "image" : "https://www.bluefly.com/cdn/shop/files/shutterstock_2221150419_e99b9348-c83f-437d-801c-a675545e1cea_1380x.jpg?v=1727712668",
            "title" : "LUXE HANDBAGS",
            "button" : "SHOP NOW"
        },
        {
            "image" : "https://www.bluefly.com/cdn/shop/files/luxe_for_less_shoes2_92a9e8f3-f8c9-4a62-9ebd-3cb55ddecab0_1380x.jpg?v=1727712753",
            "title" : "DESIGNER SHOES",
            "button" : "SHOP NOW"
        },
        {
            "image" : "https://www.bluefly.com/cdn/shop/files/shutterstock_1829541401_e4c4e667-59fb-4b40-b264-31a11e9666c0_1380x.jpg?v=1727712788",
            "title" : "ICONIC SUNGLASSES",
            "button" : "SHOP NOW"
        },
        {
            "image" : "https://www.bluefly.com/cdn/shop/files/shutterstock_2382157791-R_22ff1bb1-d722-46dd-b75e-baec371beb11_1380x.jpg?v=1727712830",
            "title" : "WOMEN BLAZERS",
            "button" : "SHOP NOW"
        },
        {
            "image" : "https://www.bluefly.com/cdn/shop/files/shutterstock_1178694619-R_8d645c9e-31c8-4e05-aa35-e5362b208ea2_1380x.jpg?v=1727712962",
            "title" : "TRENDING DRESSES",
            "button" : "SHOP NOW"
        },
        {
            "image" : "https://www.bluefly.com/cdn/shop/files/shutterstock_1229781355-R_9150e544-d0cd-4d4b-870d-f02fb5bfec21_1380x.jpg?v=1727713011",
            "title" : "MEN COATS & JACKETS",
            "button" : "SHOP NOW"
        },
        {
            "image" : "https://www.bluefly.com/cdn/shop/files/DENIM_073024_1380x.png?v=1725660299",
            "title" : "DENIM FOR HIM & HER",
            "button" : "SHOP NOW"
        },
        {
            "image" : "https://www.bluefly.com/cdn/shop/files/AdobeStock_345685522_Editorial_Use_Only_2ebb323d-3f5c-4e34-b788-f3d609914422_1380x.jpg?v=1727713756",
            "title" : "MEN SNEAKERS",
            "button" : "SHOP NOW"
        },
    ]


    return ( 
        <>
            <Banners />      
            <div className="home-wrapper">
                <div className="home">
                    <div className="shop-by">
                        <h1>SHOP BY</h1>
                        <div className="shop-cards">
                            {
                                cards.map((card,index)=>(
                                    <div className="card" key={index}>
                                        <img src={card.image} alt="" className="card-image" />
                                        <h2 className="card-title">{card.title}</h2>
                                        <button className="card-button">{card.button} &#8594;</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>  
            <Footer />
        </>
     );
}

export default Home;