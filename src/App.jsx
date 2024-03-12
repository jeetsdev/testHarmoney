import { useEffect, useState } from "react";
import "./App.css";
import data from "./data.json";

export default function App() {
  const [msgData, setMsgData] = useState(data);

  useEffect(() => {
    const newData = {};
    data.forEach((item) => {
      console.log(item);
      if (newData[item.msg]) {
        newData[item.msg].count++;
      } else {
        newData[item.msg] = { ...item, count: 1 };
      }
    });
    setMsgData(Object.values(newData));
  }, []);

  return (
    <main>
      Test Here
      {msgData.map((item) => {
        return (
          <div key={item.name} className="card">
            <p>{item.name}</p>
            <p>{item.msg}</p>
            <p>{item.count}</p>
          </div>
        );
      })}
    </main>
  );
}
