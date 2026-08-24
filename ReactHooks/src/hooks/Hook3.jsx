import { createContext, useContext } from "react";

const UserContext = createContext();

export default function Hooks3() {
  return (
    <>
      <section>
        <h1>useContext Hook</h1>
        <UserContext.Provider value="Enrique">
          <Profile />
        </UserContext.Provider>
        <pre>
{`// 1. Context create
const MyContext = createContext();

// 2. Provider se data provide
<MyContext.Provider value={data}>
    <Component />
</MyContext.Provider>

// 3. Kisi bhi child component mein consume
const data = useContext(MyContext);`}
        </pre>
      </section>
    </>
  );
}

function Profile() {
  return <UserDetails />;
}

function UserDetails() {
  const user = useContext(UserContext);
  return <h2>Hello {user}</h2>;
}
