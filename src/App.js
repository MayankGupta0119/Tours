import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";
function App() {
  const [tours, setTours] = useState(data);
  function removeTour(id){
    const newTours = tours.filter(tour=>tour.id !== id);
    // filter will return a new array to newTours, in which the tour with the id, for which we clicked
    // not intrested button will be removed and that tour will not be there in newTour
    // then we have set the tour as newTour with the updater function.
    // so now data will be rendered and it will delete or we can say as per new dataset there will be no tour with that id.
    setTours(newTours);
  }
  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No Tours left</h2>
        <button className = "btn_white" onClick={()=>{setTours(data)}}>Refresh</button>
        {/* yaha pe arrow function esliye use kiya hai taki jab button pe click hoga tabhi wo refresh krega,
        agr aise directly funciton call krte i.e. onClick = {setTours(data)} to yaha pe since we had used () then the function render hone pe he call hojayega not on getting click
        agr hum jab koi handler call krte hai tab aisa kr skte hai i.e. onClick = {setHandler} with no ()*/}
      </div>
    )
  }
  return (
    <div className="app">
      <Tours tours={tours} removedata = {removeTour}></Tours>
      {/* can use same name of prop as of state variable */}
    </div>
  );
}

export default App;
