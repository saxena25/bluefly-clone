import "./SubNavbar.css";
import {useReducer} from 'react';

const initialValue = {
    clothing: false,
    shoes: false,
    handbag: false,
    sunglass: false,
    designers: false,
    accessories: false,
    jewelry: false,
    under: false,
    clearance: false
}

const reducer = (state,action) =>{
    switch(action.type){
        case "clothing":
            return {...state, clothing: action.payload};
        case "shoes":
            return {...state, shoes: action.payload};
        case "handbag":
            return {...state, handbag: action.payload};
        case "sunglass":
            return {...state, sunglass: action.payload};
        case "designers":
            return {...state, designers: action.payload};
        case "accessories":
            return {...state, accessories: action.payload};
        case "jewelry":
            return {...state, jewelry: action.payload};
        case "under":
            return {...state, under: action.payload};
        case "clearance":
            return {...state, clearance: action.payload};
        default :
            return state;
    }
}


function SubNavbar() {
    // const [isMegaMenu, setIsMegaMenu] = useState(false);
    const[state,dispatch]=useReducer(reducer, initialValue)

  return (
    <div className='sub-navbar-wrapper'>
      <div className='sub-navbar'>
        <div className='drop-down-clothing drop-down' onMouseOver={()=>dispatch({type: "clothing", payload : true})} onMouseLeave={()=>dispatch({type: "clothing", payload: false})}>
            <button>CLOTHING</button>
            <img className='dropDown-img' src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png" alt="expand-arrow--v1"/>
        </div>
            
        <div className='drop-down-shoes drop-down' onMouseOver={()=>dispatch({type: "shoes", payload : true})} onMouseLeave={()=>dispatch({type : "shoes", payload : false})}>
            <button>SHOES</button>
            <img className='dropDown-img' src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png" alt="expand-arrow--v1"/>
        </div>
            
        <div className='drop-down-handbag drop-down' onMouseOver={()=>dispatch({type: "handbag", payload : true})} onMouseLeave={()=>dispatch({type : "handbag", payload : false})}>
            <button>HANDBAGS</button>
            <img className='dropDown-img' src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png" alt="expand-arrow--v1"/>
        </div>

        <div className='drop-down-sunglass drop-down' onMouseOver={()=>dispatch({type: "sunglass", payload : true})} onMouseLeave={()=>dispatch({type : "sunglass", payload : false})}>
            <button>SUNGLASSES</button>
            <img className='dropDown-img' src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png" alt="expand-arrow--v1"/>
        </div>
            <div className='sub-menu-sunglass'></div>

        <div className='drop-down-designer drop-down' onMouseOver={()=>dispatch({type: "designers", payload : true})} onMouseLeave={()=>dispatch({type : "designers", payload : false})}>
            <button>DESIGNERS</button>
            <img className='dropDown-img' src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png" alt="expand-arrow--v1"/>
        </div>
            <div className='sub-menu-designers'></div>

        <div className='drop-down-jewelry drop-down' onMouseOver={()=>dispatch({type: "jewelry", payload : true})} onMouseLeave={()=>dispatch({type : "jewelry", payload : false})}>
            <button>JEWELRY & WATCHES</button>
            <img className='dropDown-img' src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png" alt="expand-arrow--v1"/>
        </div>
            <div className='sub-menu-jewelry'></div>

        <div className='drop-down-accessories drop-down' onMouseOver={()=>dispatch({type: "accessories", payload : true})} onMouseLeave={()=>dispatch({type : "accessories", payload : false})}>
            <button>ACCESSORIES</button>
            <img className='dropDown-img' src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png" alt="expand-arrow--v1"/>
        </div>
            <div className='sub-menu-accessories'></div>

        <div className='drop-down-under50 drop-down' onMouseOver={()=>dispatch({type: "under", payload : true})} onMouseLeave={()=>dispatch({type : "under", payload : false})}>
            <button>UNDER $50</button>
            <img className='dropDown-img' src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png" alt="expand-arrow--v1"/>
        </div>
            <div className='sub-menu-under50'></div>

        <div className='drop-down-clearance drop-down' onMouseOver={()=>dispatch({type: "clearance", payload : true})} onMouseLeave={()=>dispatch({type : "clearance", payload : false})}>
            <button>CLEARANCE</button>
            <img className='dropDown-img' src="https://img.icons8.com/ios-glyphs/30/expand-arrow--v1.png" alt="expand-arrow--v1"/>
        </div>
            <div className='sub-menu-clearance'></div>
      </div>
      {state.clothing ? (
                <div className='sub-menu-clothing' onMouseOver={()=>dispatch({type: "clothing", payload : true})} onMouseLeave={()=>dispatch({type: "clothing", payload : false})}>
                    <div className="women">
                        <h3>WOMEN&#39;S CLOTHING</h3>
                        <p>SHOP ALL</p>
                        <p>ACTIVEWEAR</p>
                        <p>COATS & JACKETS</p>
                        <p>DRESSES</p>
                        <p>JEANS & DENIM</p>
                        <p>JUMPSUITS & ROMPERS</p>
                        <p>LINGERIE & SLEEPWEAR</p>
                        <p>LOUNGEWEAR & HOSIERY</p>
                        <p>PANTS & LEGGINGS</p>
                        <p>SHORTS</p>
                        <p>SKIRTS</p>
                        <p>SWEATERS</p>
                        <p>SWEATSHIRTS & HOODIES</p>
                        <p>SWIMWEAR & COVERUPS</p>
                        <p>TOPS & TEES</p>
                    </div>
                    <div className="men">
                        <h3>MEN&#39;S CLOTHING</h3>
                        <p>SHOP ALL</p>
                        <p>ACTIVEWEAR</p>
                        <p>CASUAL BUTTON-DOWN SHIRTS</p>
                        <p>COATS & JACKETS</p>
                        <p>DRESS SHIRTS</p>
                        <p>JEANS & DENIM</p>
                        <p>PANTS</p>
                        <p>POLO SHIRTS</p>
                        <p>SHORTS</p>
                        <p>SPORT COATS & BLAZERS</p>
                        <p>SUITS & SEPARATES</p>
                        <p>SWEATERS</p>
                        <p>SWEATSHIRTS & HOODIES</p>
                        <p>SWIMWEAR</p>
                        <p>T-SHIRTS</p>
                    </div>
                </div>
            ) : null}
        {state.shoes ? (
            <div className='sub-menu-shoes' onMouseOver={()=>dispatch({type: "shoes", payload : true})} onMouseLeave={()=>dispatch({type: "shoes", payload : false})}>
                <div className="women-shoes">
                    <h3>WOMEN&#39;S SHOES</h3>
                    <p>SHOP ALL</p>
                    <p>BOOTS</p>
                    <p>ESPADRILLES</p>
                    <p>FLATS</p>
                    <p>MULES & SLIDES</p>
                    <p>OXFORDS & LOAFERS</p>
                    <p>PUMPS & HEELS</p>
                    <p>SANDALS</p>
                    <p>SLIPPERS</p>
                    <p>SNEAKERS</p>
                    <p>WEDGES</p>
                </div>
                <div className="women-designers">
                    <h3>WOMEN&#39;S DESIGNERS</h3>
                    <p>SHOP ALL</p>
                    <p>ALEXANDER MCQUEEN</p>
                    <p>BALENCIAGA</p>
                    <p>BOTTEGA VENETA</p>
                    <p>CHRISTIAN LOUBOUTIN</p>
                    <p>DOLCE & GABBANA</p>
                    <p>FENDI</p>
                    <p>GIANVITO ROSSI</p>
                    <p>GUCCI</p>
                    <p>JIMMY CHOO</p>
                    <p>MANOLO BLAHNIK</p>
                    <p>SAINT LAURENT</p>
                    <p>STUART WEITZMAN</p>
                    <p>SALVATORE FERRAGAMO</p>
                    <p>VALENTINO</p>
                    <p>VEJA</p>
                </div>
                <div className="men-shoes">
                    <h3>MEN&#39;S SHOES</h3>
                    <p>SHOP ALL</p>
                    <p>BOOTS</p>
                    <p>DRIVERS, LOAFERS & SLIP-ONS</p>
                    <p>OXFORDS & DERBY SHOES</p>
                    <p>SANDALS & FLIP FLOPS</p>
                    <p>SLIPPERS</p>
                    <p>SNEAKERS</p>
                </div>
            </div>
        ): null}
        {state.handbag ? (
            <div className='sub-menu-handbag' onMouseOver={()=>dispatch({type: "handbag", payload : true})} onMouseLeave={()=>dispatch({type: "handbag", payload : false})}>
                <div className="handbag-top-designers">
                    <h3>TOP DESIGNERS</h3>
                    <p>SHOP ALL</p>
                    <p>BALENCIAGA</p>
                    <p>BOTTEGA VENETA</p>
                    <p>BURBERRY</p>
                    <p>CELINE</p>
                    <p>CHLOE</p>
                    <p>DOLCE & GABBANA</p>
                    <p>FENDI</p>
                    <p>GIVENCHY</p>
                    <p>GUCCI</p>
                    <p>MARIO VALENTINO</p>
                    <p>PRADA</p>
                    <p>SAINT LAURENT</p>
                    <p>SALVATORE FERRAGAMO</p>
                    <p>STELLA MCCARTNEY</p>
                    <p>VALENTINO</p>
                </div>
                <div className="all-handbags">
                    <h3>ALL HANDBAGS</h3>
                    <p>SHOP ALL</p>
                    <p>BUCKET-BAGS</p>
                    <p>CLUTCHES</p>
                    <p>CROSSBODY BAGS</p>
                    <p>HOBO BAGS</p>
                    <p>SATCHELS</p>
                    <p>SHOULDER BAGS</p>
                    <p>TOTE BAGS</p>
                    <p>TRAVEL BAGS & LUGGAGE</p>
                    <p>WOMENS WALLETS & CARDHOLDERS</p>
                </div>
            </div>
        ): null}
        {state.sunglass ? (
            <div className='sub-menu-shoes' onMouseOver={()=>dispatch({type: "sunglass", payload : true})} onMouseLeave={()=>dispatch({type: "sunglass", payload : false})}>
                <div className="women-shoes">
                    <h3>WOMEN&#39;S SUNGLASS</h3>
                    <p>SHOP ALL</p>
                    <p>BOOTS</p>
                    <p>ESPADRILLES</p>
                    <p>FLATS</p>
                    <p>MULES & SLIDES</p>
                    <p>OXFORDS & LOAFERS</p>
                    <p>PUMPS & HEELS</p>
                    <p>SANDALS</p>
                    <p>SLIPPERS</p>
                    <p>SNEAKERS</p>
                    <p>WEDGES</p>
                </div>
                <div className="women-designers">
                    <h3>WOMEN&#39;S DESIGNERS</h3>
                    <p>SHOP ALL</p>
                    <p>ALEXANDER MCQUEEN</p>
                    <p>BALENCIAGA</p>
                    <p>BOTTEGA VENETA</p>
                    <p>CHRISTIAN LOUBOUTIN</p>
                    <p>DOLCE & GABBANA</p>
                    <p>FENDI</p>
                    <p>GIANVITO ROSSI</p>
                    <p>GUCCI</p>
                    <p>JIMMY CHOO</p>
                    <p>MANOLO BLAHNIK</p>
                    <p>SAINT LAURENT</p>
                    <p>STUART WEITZMAN</p>
                    <p>SALVATORE FERRAGAMO</p>
                    <p>VALENTINO</p>
                    <p>VEJA</p>
                </div>
                <div className="men-shoes">
                    <h3>MEN&#39;S SUNGLASS</h3>
                    <p>SHOP ALL</p>
                    <p>BOOTS</p>
                    <p>DRIVERS, LOAFERS & SLIP-ONS</p>
                    <p>OXFORDS & DERBY SHOES</p>
                    <p>SANDALS & FLIP FLOPS</p>
                    <p>SLIPPERS</p>
                    <p>SNEAKERS</p>
                </div>
            </div>
        ): null}
        {state.designers ? (
            <div className='sub-menu-clothing' onMouseOver={()=>dispatch({type: "designers", payload : true})} onMouseLeave={()=>dispatch({type: "designers", payload : false})}>
                <div className="women">
                        <h3>WOMEN&#39;S DESIGNERS</h3>
                        <p>SHOP ALL</p>
                        <p>ACTIVEWEAR</p>
                        <p>COATS & JACKETS</p>
                        <p>DRESSES</p>
                        <p>JEANS & DENIM</p>
                        <p>JUMPSUITS & ROMPERS</p>
                        <p>LINGERIE & SLEEPWEAR</p>
                        <p>LOUNGEWEAR & HOSIERY</p>
                        <p>PANTS & LEGGINGS</p>
                        <p>SHORTS</p>
                        <p>SKIRTS</p>
                        <p>SWEATERS</p>
                        <p>SWEATSHIRTS & HOODIES</p>
                        <p>SWIMWEAR & COVERUPS</p>
                        <p>TOPS & TEES</p>
                    </div>
                    <div className="men">
                        <h3>MEN&#39;S DESIGNERS</h3>
                        <p>SHOP ALL</p>
                        <p>ACTIVEWEAR</p>
                        <p>CASUAL BUTTON-DOWN SHIRTS</p>
                        <p>COATS & JACKETS</p>
                        <p>DRESS SHIRTS</p>
                        <p>JEANS & DENIM</p>
                        <p>PANTS</p>
                        <p>POLO SHIRTS</p>
                        <p>SHORTS</p>
                        <p>SPORT COATS & BLAZERS</p>
                        <p>SUITS & SEPARATES</p>
                        <p>SWEATERS</p>
                        <p>SWEATSHIRTS & HOODIES</p>
                        <p>SWIMWEAR</p>
                        <p>T-SHIRTS</p>
                    </div>
            </div>
        ): null}
        {state.jewelry ? (
            <div className='sub-menu-handbag' onMouseOver={()=>dispatch({type: "jewelry", payload : true})} onMouseLeave={()=>dispatch({type: "jewelry", payload : false})}>
                <div className="handbag-top-designers">
                    <h3>TOP DESIGNERS</h3>
                    <p>SHOP ALL</p>
                    <p>BALENCIAGA</p>
                    <p>BOTTEGA VENETA</p>
                    <p>BURBERRY</p>
                    <p>CELINE</p>
                    <p>CHLOE</p>
                    <p>DOLCE & GABBANA</p>
                    <p>FENDI</p>
                    <p>GIVENCHY</p>
                    <p>GUCCI</p>
                    <p>MARIO VALENTINO</p>
                    <p>PRADA</p>
                    <p>SAINT LAURENT</p>
                    <p>SALVATORE FERRAGAMO</p>
                    <p>STELLA MCCARTNEY</p>
                    <p>VALENTINO</p>
                </div>
                <div className="all-handbags">
                    <h3>ALL HANDBAGS</h3>
                    <p>SHOP ALL</p>
                    <p>BUCKET-BAGS</p>
                    <p>CLUTCHES</p>
                    <p>CROSSBODY BAGS</p>
                    <p>HOBO BAGS</p>
                    <p>SATCHELS</p>
                    <p>SHOULDER BAGS</p>
                    <p>TOTE BAGS</p>
                    <p>TRAVEL BAGS & LUGGAGE</p>
                    <p>WOMENS WALLETS & CARDHOLDERS</p>
                </div>
            </div>
        ): null}
        {state.accessories ? (
            <div className='sub-menu-accessories' onMouseOver={()=>dispatch({type: "accessories", payload : true})} onMouseLeave={()=>dispatch({type: "accessories", payload : false})}>
                accessories</div>
        ): null}
        {state.under ? (
            <div className='sub-menu-under' onMouseOver={()=>dispatch({type: "under", payload : true})} onMouseLeave={()=>dispatch({type: "under", payload : false})}>
                under</div>
        ): null}
        {state.clearance ? (
            <div className='sub-menu-clearance' onMouseOver={()=>dispatch({type: "clearance", payload : true})} onMouseLeave={()=>dispatch({type: "clearance", payload : false})}>
                clearance</div>
        ): null}
    </div>
  )
}

export default SubNavbar
