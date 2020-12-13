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
                <th className="col-name-th" scope="col">nome</th>
                <th className="t-center" scope="col">vitórias</th>
                <th className="t-center" scope="col">baixas</th>
                <th className="t-center" scope="col">Kd</th>
                <th className="t-center" scope="col">mortes</th>
              </tr>
            </thead>
            <tbody>
              {res.map((player) => (
                <tr key={player.id}>
                  <th scope="row">{player.position}</th>
                  <td>{player.name}</td>
                  <td className="t-center">{player.wins}</td>
                  <td className="t-center">{player.kills}</td>
                  <td className="t-center">{Kdformatter(player.kdRatio)}</td>
                  <td className="t-center">{player.deaths}</td>
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
