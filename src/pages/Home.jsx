import Banner from "./Banner";
import Products from "./Products";
import Productsales from "./Productsales";
import Productshow from "./Productshow";
import ShoppexOffer from "./ShoppexOffer";
import TrendingProducts from "./TrendingProducts";
function Home() {
  return (
    <div className="home">
      <Banner />
      <Products/>
      <Productsales/>
      <ShoppexOffer/>
      <Productshow/>
      <TrendingProducts/>
      </div>
  );
}

export default Home;

