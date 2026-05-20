import { useEffect, useState } from "react";
import Clock from "./components/Clock";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().getTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="app">
      <section className="clock-card">
        <p className="assignment">Inlämningsuppgift 1 i JavaScript 3</p>
        <p className="student">David Vakhayev, FE23</p>

        <Clock time={time} />
      </section>
    </main>
  );
}

export default App;