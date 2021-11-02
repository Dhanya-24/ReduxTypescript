import React from "react";
import { Child, ChildAsFC } from "./Child";

export default function Parent() {
  const HeadComp: React.FC = () => <h2>This is a child component</h2>;
  return (
    <div>
      <Child
        color="red"
        onClick={() => console.log("Clicked")}
        childComp={<HeadComp />}
      />
      <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
        <HeadComp />
      </ChildAsFC>
    </div>
  );
}
