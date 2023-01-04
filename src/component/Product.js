import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/slice/cartSlice";
import { useSnackbar } from "notistack";
import Cart from "../pages/Cart/Cart";
import { Link } from "react-router-dom";
const Product = ({item}) => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const { enqueueSnackbar}  = useSnackbar();
    const addtocartHandler = (item) => {
        dispatch(add(item));
        enqueueSnackbar(`Item added to your cart successfully`, {
          variant: "success",
          autoHideDuration: 3000,
        });
      };
      const removeitemHandler = (id) => {
        dispatch(remove(id));
        enqueueSnackbar(`Item removed from your cart!`, {
          variant: "error",
          autoHideDuration: 3000,
        });
      };
      console.log('product in cart',cart);
  return (
    <>
      <h2>item in cart - {cart.length}</h2>
      <Link to={"/cart"}>cart</Link>
      <div>
        <img src={item.image} alt={item.title} width={'200px'}/>
        <h6>{item.title}</h6>
        <p>${item.price}</p>
        {cart.some((p) => p.id === item.id)?(
          <button onClick={()=>removeitemHandler(item.id)}>Remove item</button>
        ):(
          <button onClick={()=>addtocartHandler(item)}>add item</button>
        )}
      </div>
    </>
  );
};

export default Product;
