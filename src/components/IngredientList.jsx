// src/components/IngredientList.jsx

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient) => (
        <li style={{ backgroundColor: ingredient.color }} key={ingredient.name}>
          {ingredient.name}
          <button onClick={() => props.onAdd(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;