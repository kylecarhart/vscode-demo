import toast from "react-hot-toast";
import { LuPlusSquare } from "react-icons/lu";
import { useAppDispatch } from "../../redux/hooks";
import { addItem } from "../../redux/slices/cartSlice";
import Button from "../Button/Button";
import Placeholder from "../Placeholder/Placeholder";
import styles from "./ItemCard.module.css";
import { Item } from "../../types";

interface Props {
  item: Item;
}

export default function ItemCard({ item }: Props) {
  const dispatch = useAppDispatch();

  function handleAddToCart() {
    dispatch(addItem(item));
    toast.success(`${item.name} added to your bag!`);
  }

  const { name, description, price } = item;
  return (
    <div className={styles.card}>
      <Placeholder width={100} height={100} />
      <div className={styles.cardData}>
        <div className={styles.itemData}>
          <span className={styles.name}>{name}</span>
          <span className={styles.description}>{description}</span>
          <span className={styles.price}>Price: ${price}</span>
        </div>
        <div className={styles.cardButton}>
          <Button
            onClick={handleAddToCart}
            icon={<LuPlusSquare />}
            text="Add to cart"
          />
        </div>
      </div>
    </div>
  );
}
