import { useCallback, useEffect, useMemo, useState, useRef } from "react";

interface User {
  id: number;
  userName: string;
}

type fibFunc = (n: number) => number

const fib:fibFunc = (n)=>{
  if(n<2) return n;
  return fib(n-1) + fib(n-2)
}

const myNum: number = 37;

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null!);

  {console.log(inputRef?.current)}
  {console.log(inputRef?.current?.value)}

  useEffect(() => {
    console.log("Mounting");
    console.log("Users : ", users);

    return () => console.log("unmounting");
  }, [users]);

  const addTwo = useCallback((): void => setCount((prev) => prev + 2), []);
  const result = useMemo<number>(()=> fib(myNum),[myNum]);
  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{result}</h1>
      <button onClick={addTwo}>Add</button>
      <input type="text" ref={inputRef}/>
    </div>
  );
};

export default App;
