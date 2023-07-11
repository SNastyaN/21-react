import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

function App() {
  return (
    <div className="App">
      <Chart
  chartType="PieChart"
  data={[["Element", "Percentage"],
   ["Category 1", 4],
   ["Category 2", 8],]}
  width="100%"
  height="400px"
  legendToggle
/>
    </div>
  );
}

export default App;
