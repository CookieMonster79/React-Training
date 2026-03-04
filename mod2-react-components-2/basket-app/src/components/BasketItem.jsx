import './BasketItem.css'

//sfnc
export const BasketItem = ({
    num,
    uid,
    title,
    price,
    qty,
}) => {
    return (
        <div className="BasketItem">
            <div className="BasketItem-num">{num}</div>
            <div className="BasketItem-title">{title}</div>
            <div className="BasketItem-price">{price}</div>
            <div className="BasketItem-qty">
                <input type="button" value="-" onClick={ev => alert('- ' + uid)}/>
                {qty}
                <input type="button" value="+" onClick={ev => alert('+ ' + uid)}/>
            </div>
            <div className="BasketItem-amount">{qty * price}</div>
            <div className="BasketItem-link">
                <a href="#" onClick={ev => {
                    ev.preventDefault();
                    alert(uid)
                }} >Удалить</a>
            </div>
        </div>
      );
}