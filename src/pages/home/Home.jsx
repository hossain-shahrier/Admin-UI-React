import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSM from "../../components/widgets/widgetSm/Widget";
import WidgetLG from "../../components/widgets/widgetLg/Widget";
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSM />
        <WidgetLG />
      </div>
    </div>
  );
}
