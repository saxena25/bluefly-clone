import Footer from "./Footer";
import {useState, useEffect} from "react";
import axios from "axios";
import Loading from "./Loading";
import "./Men.css";

function Men() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sortPrice, setSortPrice] = useState("");
  const [sortRating, setSortRating] = useState("");
  // const [page, setPage] = useState(1);

  const FetchData = async () => {
    setLoading(true);
    let sortQuery = "";
    //here I'm checking weather sortPrice is empty string or not....
    // when sortPrice is != empty string below statement will run
    //if its empty it will not run below statement
    if(sortPrice){
      sortQuery += `&sortBy=price&order=${sortPrice}`
    }

    if(sortRating){
      sortQuery += `&sortBy=rating&order=${sortRating}`
    }

    try {
      let res = await axios.get(
        `https://dummyjson.com/products?limit=20${sortQuery}`
      );
      setLoading(false);
      setData(res.data.products);
      console.log(res.data.products);
    } catch (error) {
      console.log(`Error while Fetching Data ${error}`);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    FetchData();
  }, [sortPrice,sortRating]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(`error ${error}`);
  }

  return (
    <>
      <div className="women-wrapper">
          <h1>MEN</h1>
        <div className="wrapper">
        <div className="product-filter">
            <div className="filter">
              <h2>FILTER BY</h2>
              {/* <div className="line"></div> */}
              <select name="filter-price" id="sort-by-price" onChange={(e)=>setSortPrice(e.target.value)}>
                <option value="#">PRICE</option>
                <option value="asc">LOW TO HIGH</option>
                <option value="desc">HIGH TO LOW</option>
              </select>
              <select name="filter-rating" id="sort-by-rating" onChange={(e)=>setSortRating(e.target.value)}>
                <option value="#">RATING</option>
                <option value="asc">LOW TO HIGH</option>
                <option value="desc">HIGH TO LOW</option>
              </select>
              <select name="filter-category" id="sort-by-category">
                <option value="#">CATEGORY</option>
                <option value="1">WOMEN SHOES</option>
                <option value="2">WOMEN DRESS</option>
                <option value="3">WOMEN TOPS</option>
                <option value="4">WOMEN HANDBAGS</option>
              </select>
              <select name="filter-color" id="sort-by-color">
                <option value="#">COLOR</option>
                <option value="asc">BLACK</option>
                <option value="desc">PINK</option>
                <option value="desc">RED</option>
                <option value="desc">GREEN</option>
                <option value="desc">BROWN</option>
              </select>
            </div>
          </div>
          <div className="products">
            {data.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.images[0]} alt="" className="product-image" />
                <h3>
                  <b>{product.title}</b>
                </h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">
                  <b>${product.price}</b>
                </p>
                <button>Add To Cart</button>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Men
