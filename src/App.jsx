import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IngredientList from './components/IngredientList'
import BurgerStack from './components/BurgerStack'

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stacker, setstacker] = useState([]);

  const addstackerToBurger = (ingredient) => {
    setstacker((prevStacker) => [...prevStacker, ingredient]);
  };

  const removestackerFromBurger = (ingredient) => {
    setstacker((prevStacker) => prevStacker.filter((item) => item.name !== ingredient.name));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredients={availableIngredients} onAdd={addstackerToBurger} />
        <BurgerStack stacker={stacker} onRemove={removestackerFromBurger} />
      </section>
    </main>
  );
};

export default App
