import { useState, useRef, useEffect } from "react";

interface IUser {
  name: string;
  age: number;
}

const users: IUser[] = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState<string>("");
  const [search_obj, setSearched] = useState<IUser | undefined>();

  //the use effect Hook Working vercetile
  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const buttonClicked = () => {
    const user = users.find((x) => x.name == name);

    setSearched(user);
  };
  return (
    <div>
      User Search
      <hr />
      <input ref={inputRef} onChange={(e) => setName(e.target.value)} />
      <button onClick={buttonClicked}>searchMe</button>
      <hr />
      <div>
        {search_obj?.name}
        {search_obj && "name " + search_obj.name}
        {search_obj && " - " + search_obj.age}{" "}
      </div>
    </div>
  );
};

export default UserSearch;
