import React from "react";
import Image1 from "./assets/img1.jpg";
import Image2 from "./assets/img2.jpg";
import Image3 from "./assets/img3.jpg";

import Card from "./component/Card";
import "./App.css";
import bigUserData from "./MOCK_DATA.json";

const userData = [
  {
    name: "Hafijur",
    age: "25",
  },
  {
    name: "Uday",
    age: "25",
  },
  {
    name: "Adarsh",
    age: "25",
  },
];

const App = () => {
  console.log(bigUserData);
  return (
    <div className="main">
      {bigUserData.map((user, index) => (
        <Card key={index} name={user.first_name} age={user.age} />
      ))}

      {/* <Card name={userData[0].name} age={userData[0].age} />;  */}
    </div>
  );
};

export default App;
