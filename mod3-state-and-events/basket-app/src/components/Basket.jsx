import { BasketItem } from './BasketItem.jsx'
import { BasketTotal } from './BasketTotal.jsx'
import './Basket.css'

export function Basket({ items, setItems }) {

    let total = 0;
    return (
        <div className="Basket">
            {items.map(({ title, price, qty, uid }, index) => {
                total += price * qty;
                return <BasketItem
                    num={index + 1}
                    title={title}
                    price={price} qty={qty}
                    uid={uid}
                    key={uid}
                    items={items}
                    setItems={setItems} />
            })}

            <BasketTotal total={total} />
        </div>
    )
}