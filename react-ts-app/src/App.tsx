import { useState } from "react";
import UserCard from "./UserCard";

function App() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState({
    name: "Shivam",
    role: "admin" as "admin" | "user",
  });


  return (
    <div>
      <h1>Counter Example</h1>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setUser({ ...user, role: "user" })}>
        Change Role
      </button>


      <hr />

      <UserCard name={user.name} role={user.role} />
    </div>
  );
}

export default App;
