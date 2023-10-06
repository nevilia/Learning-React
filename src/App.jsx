import React from 'react'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "./src/Pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "./src/Pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "./src/Pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "./src/Pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "./src/Pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "./src/Pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Pizza({pizzaObj}) {
  // if (pizzaObj.soldOut) return null

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : "" }`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  )
}

function Header() {
  const style = {};
  return (
    <>
      <header className="header">
        <h1 style={style}>Fast React Pizza Co.</h1>
      </header>
    </>
  )
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
         <p>
         Authentic Italian cuisine. 6 creative dishes to chose from. All from out stone ove, all organic, all delicious.
       </p>
        <ul className='pizzas'>
          {pizzas.map((pizza) =>
            <Pizza pizzaObj={pizza} key={pizza.name} />
            )}
        </ul>
            </>
        )
       : (<p>We're still working on the menu please come back later.</p>)
      }

      {/* <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinich and, ricotta cheese' photoName="./src/Pizzas/spinaci.jpg" price='10'  />
    <Pizza name='Pizza Funghi' ingredients='Tomato, mozarella, spinich and, ricotta cheese' photoName="./src/Pizzas/funghi.jpg" price='12'/> */}
    </main>
  )
}
function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 12
  const isOpen = hour >= openHour && hour <= closeHour
  return (
      <footer className='footer'>
        {isOpen ? ( <Order closeHour = {closeHour} openHour={openHour} />) : (<p>We're happy to welcome you bteween {openHour}:00 and {closeHour}:00 </p>)
        }
      </footer>
  )
}

function Order({closeHour, openHour}) {
  return (
    <div className='order'>
            <p>
              We're Open from {openHour}:00 until {closeHour}:00. Come visit or order Online.
            </p>
            <button className='btn'>Order</button>
          </div>
  )
}

function App() {

  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  )
}

export default App
