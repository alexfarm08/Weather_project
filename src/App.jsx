import { useState } from 'react'
import HomePage from "./pages/Home.jsx";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <HomePage onSearch={setSearch} search={search}/>
    </>
  );
}

export default App
