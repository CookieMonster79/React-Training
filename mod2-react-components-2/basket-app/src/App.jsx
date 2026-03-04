import {Basket} from './components/Basket.jsx'
import './App.css'

function App() {

  const items = [
    {uid: 'bf2e4d0e-c2e3-461e-b669-a33c6927716c', title: 'Товар 1', price: 100, qty: 2},
    {uid: 'e6840d79-9eea-49d1-baac-b11b7d06bb8a', title: 'Товар 2', price: 440, qty: 10},
    {uid: 'e6840d79-9eea-49d1-baac-b11b7d06b38a', title: 'Товар 3', price: 1130, qty: 1},
  ]

  return (
    <>
      <h1>Корзина</h1>
      <Basket items={items}/>
    </>
  )
}

export default App