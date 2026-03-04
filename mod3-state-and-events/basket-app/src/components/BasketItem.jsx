import './BasketItem.css'

//sfnc
export const BasketItem = ({
    num,
    uid,
    title,
    price,
    qty,
    items,
    setItems
}) => {

    const increment = () => {
        const newItems = [...items]
        newItems.filter(item => item.uid === uid)[0].qty++
        setItems(newItems)
    }
    const decrement = () => {
        const newItems = [...items]
        const item = newItems.filter(item => item.uid === uid)[0]
        if (item.qty > 1) {
            item.qty--
        }
        setItems(newItems)
    }
    const removePosition = (ev) => {
        ev.preventDefault();
        const newItems = [...items].filter(item => item.uid != uid)
        setItems(newItems)
    }

    return (
        <div className="BasketItem">
            <div className="BasketItem-num">{num}</div>
            <div className="BasketItem-title">{title}</div>
            <div className="BasketItem-price">{price}</div>
            <div className="BasketItem-qty">
                <input type="button" value="-" onClick={decrement} />
                {qty}
                <input type="button" value="+" onClick={increment} />
            </div>
            <div className="BasketItem-amount">{qty * price}</div>
            <div className="BasketItem-link"><a href="#" onClick={removePosition} >Удалить</a>
            </div>
        </div>
    );
}