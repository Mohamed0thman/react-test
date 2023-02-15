import Card from './components/card/Card';
import { data, rowData } from './assets/data/index';
function App() {
  return (
    <div className="App p-10">
      <div className=" grid grid-cols-1 gap-8  lg:grid-cols-3  sm:grid-cols-2">
        {data.map((item, i) => (
          <Card key={i} data={item} border rooms />
        ))}
      </div>

      <div className="my-10"></div>

      {rowData.map((item, i) => (
        <Card key={i} row data={item} />
      ))}
      {data.map((item, i) => (
        <Card key={i} row data={item} border rooms btn btnText="Pay Rent" />
      ))}
    </div>
  );
}

export default App;
