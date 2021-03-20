import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <div>
      <Child
        color="red"
        onClick={() => {
          console.log("Clicked!!..");
        }}
      />

      <ChildAsFC
        color="red"
        onClick={() => {
          console.log("Clicked!!..");
        }}
      >
        Hi There
      </ChildAsFC>
    </div>
  );
};

export default Parent;
