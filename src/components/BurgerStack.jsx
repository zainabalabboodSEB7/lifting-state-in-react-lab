// `src/components/BurgerStack.jsx`
import '../App.css'
const BurgerStack = (props) => {
  return (
    <ul>
      {props.stacker.length === 0 ? (
        <p>No Ingredients Available</p>
      ) : (
        props.stacker.map((ingredient) => (
          <li style={{ backgroundColor: ingredient.color }} key={ingredient.name}>
            {ingredient.name}
            <button onClick={() => props.onRemove(ingredient)}>x</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default BurgerStack;