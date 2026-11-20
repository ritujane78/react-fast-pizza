import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div className="flex items-center justify-between p-3 space-y-1">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
        <p className="itext-sm italic  capitalize text-stone-500"> {isLoadingIngredients? "Loading...": ingredients.join(", ")?? []}</p>
    </li>
  );
}

export default OrderItem;
