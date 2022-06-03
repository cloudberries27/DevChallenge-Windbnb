import React from "react";
import Search from "./components/search";
import Property from "./components/property";
import properties from "./data/stays.json";
import Logo from "./images/logo.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Windbnb Logo"/>
        <Search/>
      </header>
      <section>
        <div className="top">
          <h1>Stays in Finland</h1>
          <p>12+ stays</p>
        </div>
        <div className="properties">
          {properties.map((property, key)=>{
            if (property.city==="Helsinki"){
              return (
                <Property property={property} key={key}/>
              )
            } else return <></>
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
