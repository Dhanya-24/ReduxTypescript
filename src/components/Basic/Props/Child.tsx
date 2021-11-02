import React from "react";

interface IChildProps {
  color: string;
  onClick: () => void;
  childComp: React.ReactNode;
}

// This method we can use the below methods
// Child.defaultProps
//Child.displayName;
// Allow to use only declared inside IChildProps

export const Child = (props: IChildProps) => {
  const { color, onClick, childComp } = props;

  return (
    <div>
      {childComp}
      <h2> {color}</h2>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

interface IChildFCProps {
  color: string;
  onClick: () => void;
}

export const ChildAsFC: React.FC<IChildFCProps> = (props) => {
  const { color, onClick, children } = props;
  return (
    <div>
      {children}
      <h2>{color}</h2>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
