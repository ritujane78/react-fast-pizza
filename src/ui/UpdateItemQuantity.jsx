import { useDispatch } from "react-redux"
import Button from "./Button"
import { decreaseItemQuantity, increaseItemQuantity } from "../features/cart/cartSlice";

function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch();
  return (
    <div className="flex gap-1 md:gap-3 items-center    ">
        <Button onClick = {() => dispatch(decreaseItemQuantity(pizzaId)) } type="round" > - </Button>
        <span className="text-sm font-medium">{currentQuantity}</span>
        <Button onClick = {() => dispatch(increaseItemQuantity(pizzaId))} type="round" >+</Button>
      
    </div>
  )
}

export default UpdateItemQuantity
