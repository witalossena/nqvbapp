import "../App.css";

function Table({player}) {
  <table className="table table-dark">
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
      <tr>
        <th scope="row">1</th>
        <td>David Souza</td>
        <td>28</td>
        <td>3035</td>
        <td>0.9281345565749235</td>
        <td>3270</td>
      </tr>
    </tbody>
  </table>;
}


export default Table;