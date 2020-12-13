import "./App.css";
import Api from "./api";
import React, { useState, useEffect } from "react";

function App() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    Api.getData().then((response) => {
      setRes(response.data);
    });
  }, []);

  const Kdformatter = (kd = 0) => {
    return kd.toFixed(3)
  };



  return (
    <div className="App">
      <div className="container">
        <div className="table-responsive">
          <table className="table table-dark shadow-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">nome</th>
                <th scope="col">vitórias</th>
                <th scope="col">baixas</th>
                <th scope="col">Kd</th>
                <th scope="col">mortes</th>
              </tr>
            </thead>
            <tbody>
              {res.map((player) => (
                <tr key={player.id}>
                  <th scope="row">{player.position}</th>
                  <td>{player.name}</td>
                  <td>{player.wins}</td>
                  <td>{player.kills}</td>
                  <td>{Kdformatter(player.kdRatio)}</td>
                  <td>{player.deaths}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
