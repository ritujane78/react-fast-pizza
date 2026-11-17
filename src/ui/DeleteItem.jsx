import { useDispatch } from "react-redux"
import Button from "./Button"
import { deleteItem } from "../features/cart/cartSlice";

function DeleteItem({id}) {
    const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(deleteItem(id))} type="small">Delete</Button>
  )
}

export default DeleteItem
