import React from "react";
import Search from "./components/search";
import Property from "./components/property";
import propData from "./data/stays.json";
import Logo from "./images/logo.png";
import './App.css';

function App() {
  const [properties, setProperties] = React.useState(propData)

  const handleFilter = (city, people) =>{
    const results = propData.filter((property)=>{
      return property.maxGuests >= people && property.city === city;
    })
    setProperties(results)
  }

  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Windbnb Logo"/>
        <Search handleFilter={handleFilter} reset={()=>setProperties(propData)}/>
      </header>
      <section>
        <div className="top">
          <h1>Stays in Finland</h1>
          <p>{properties.length} stays</p>
        </div>
        <div className="properties">
          {properties.map((property, key)=>{
            return ( <Property property={property} key={key}/> )
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
