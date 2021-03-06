import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);

  const onButtonClicked = () => {
    setGuests([...guests, name]);

    setName("");
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>

      <hr />

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onButtonClicked}>Add Guest</button>
    </div>
  );
};

export default GuestList;
