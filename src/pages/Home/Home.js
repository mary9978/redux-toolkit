import Product from "../../component/Product";
import { products } from "../../data";
const Home = () => {
  return (
    <div>
      {products.map((item) => {
        return (
            <Product item={item}/>
        )
      })}
    </div>
  );
};

export default Home;
