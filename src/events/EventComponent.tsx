import React from "react";

const EventComponent: React.FC = () => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const drageHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return (
    <div>
      <input type="text" onChange={changeHandler} />

      <div draggable onDragStart={drageHandler}>
        Drage Me
      </div>
    </div>
  );
};

export default EventComponent;
