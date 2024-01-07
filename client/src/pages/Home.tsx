import Card from '@mui/material/Card';
import { BarChart } from '@mui/x-charts/BarChart';
import PieChart from '../components/charts/PieChart';

const Home = () => (
  <div className="home-dashboard-wrapper">
    <Card sx={{ minWidth: 275 }} className="dasboard-boards">
      <PieChart />
    </Card>
    <Card sx={{ minWidth: 275 }} className="dasboard-boards">
      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: ['bar A', 'bar B', 'bar C'],
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: [2, 5, 3],
          },
        ]}
        width={500}
        height={300}
      />
    </Card>
    <Card sx={{ minWidth: 275 }} className="dasboard-boards">
      <PieChart />
    </Card>
    <Card sx={{ minWidth: 275 }} className="dasboard-boards">
      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: ['bar A', 'bar B', 'bar C'],
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: [2, 5, 3],
          },
        ]}
        width={500}
        height={300}
      />
    </Card>
    <Card sx={{ minWidth: 275 }} className="dasboard-boards">
      <PieChart />
    </Card>
  </div>
);

export default Home;
