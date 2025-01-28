import { useState } from "react";
import "./styles/GetForm.css";

function GetForm(props) {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(10);

  const handleFromChange = (event) => {
    setFrom(Number(event.target.value));
  };

  const handleToChange = (event) => {
    setTo(Number(event.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from > to) {
      alert("'From' value must be less than or equal to 'To' value.");
      return;
    }
    props.getPokemons(from, to);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="from-pokemon">From</label>
      <input
        type="number"
        id="from-pokemon"
        min={1}
        value={from}
        onChange={handleFromChange}
      />
      <label htmlFor="to-pokemon">To</label>
      <input
        type="number"
        id="to-pokemon"
        value={to}
        onChange={handleToChange}
      />
      <button type="submit">Get Pokemons</button>
    </form>
  );
}

export default GetForm;
