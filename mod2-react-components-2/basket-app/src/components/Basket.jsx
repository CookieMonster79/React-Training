import { BasketItem } from './BasketItem.jsx'
import { BasketTotal } from './BasketTotal.jsx'
import './Basket.css'

export function Basket({items}){

    let total = 0;
    return (
        <div className="Basket">
            {items.map(({title,price,qty,uid}, index) => {
                total += price + qty;
                return <BasketItem num={index+1} title={title} price={price} qty={qty} uid={uid} key={uid}/>
            })}
            {/* Корзина...
            <BasketItem num={1} title={'Товар 1'} price={100} qty={2} uid={1}/>
            <BasketItem num={2} title={'Товар 2'} price={440} qty={10} uid={2}/> */}
            <BasketTotal total={total} />
        </div>
    )
}