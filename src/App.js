// App.js
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/cards";

import "./haeder.css";
import "./App.css";

const activities = [
  {
    activityName: "Sky Cycling",
    backgroundImage:
      "https://www.lazymonkadventure.com/wp-content/uploads/2021/05/Sky-Cycling-in-Bir-Biling-10-scaled.jpg",
  },
  {
    activityName: "Bungee Jumping",
    backgroundImage:
      "https://res.klook.com/image/upload/u_activities:d9krsmqwa8sk4vxpsh2h,w_1.0,ar_4:3,c_scale,e_blur:10000/c_fill,w_750,h_560/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/d9krsmqwa8sk4vxpsh2h.jpg",
  },
  {
    activityName: "Gaint Swing",
    backgroundImage:
      "https://5.imimg.com/data5/MD/DP/US/SELLER-9458120/40-feet-giant-swing.jpg",
  },
  {
    activityName: "Forest Bathing",
    backgroundImage:
      "https://images.livemint.com/img/2023/03/07/1140x641/forest_bathing_1678171720441_1678171720725_1678171720725.jpg",
  },
  {
    activityName: "Kayaking Adventure",
    backgroundImage:
      "https://imgcld.yatra.com/ytimages/image/upload/v1517480886/AdvNation/ANN_ACT62/ann_top_Kayaking_1HCTcm.jpg",
  },
  {
    activityName: "Skiing Expedition",
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOrT8QfQ8jsfMhIhVyvvcDc5evQRq-F3DttgmjGFExCw&s",
  },
  {
    activityName: "Desert Safari",
    backgroundImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzA4nzpTxuPyAw-c5n1Zf2Hvi2R0D8SidPitflKanLw&s",
  },
  {
    activityName: "Cave Exploration",
    backgroundImage:
      "https://media.newyorker.com/photos/59095f95c14b3c606c105a58/master/pass/140421_r24884.jpg",
  },
  {
    activityName: "Hot Air Ballooning",
    backgroundImage:
      "https://www.tdk.com/en/tech-mag/sites/default/files/2023-05/shutterstock_1033306540s.jpg",
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="left">
          Activity Suggestions
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <div className="right1">
          <div className="top1">View all</div>
        </div>
      </div>
      <div className="cop2">
        <div className="right">
          <div className="cards">
            {activities.map((activity, index) => (
              <div key={index}>
                <Card
                  activityName={activity.activityName}
                  backgroundImage={activity.backgroundImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
