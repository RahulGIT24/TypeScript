import Heading from "./Components/Heading";
import Section from "./Components/Section";
import Counter from "./Components/Counter";
import { useState } from "react";
import { List } from "./Components/List";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Heading title="Hello" />
      <Section title="New Title">This is my section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["Coffee", "Tacos", "Code"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;
