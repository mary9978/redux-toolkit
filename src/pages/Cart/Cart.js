import { useSelector, useDispatch } from "react-redux";
import {  remove } from "../../redux/slice/cartSlice";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { enqueueSnackbar}  = useSnackbar();
  const removeItemFromCart=(id)=>{
    dispatch(remove(id));
    enqueueSnackbar(`removed successfully from cart`, {
        variant: "warning",
        autoHideDuration: 1000,
      });
  }
  console.log('cart',cart);
  return (
    <div>
      {cart.length > 0 ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-between p-2">
              {cart.map((item) => {
                return (
                  <div>
                    <img src={item.image} alt={item.title} width={"200px"} />
                    <h6>{item.title}</h6>
                    <p>${item.price}</p>
                    <button onClick={()=>removeItemFromCart(item.id)}>remove from cart</button>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">
              Your cart is empty!
            </h1>
            <Link to={"/"}>
              <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3">
                SHOP NOW
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
