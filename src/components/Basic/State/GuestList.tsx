import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guest, setGuest] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuest([...guest, name]);
  };

  console.log("name", name);
  console.log("guest", guest);

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guest.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
