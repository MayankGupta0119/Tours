import { useState } from "react";
function Card(props) {
  const [readmore, setReadmore] = useState(true);
  const desc = readmore
    ? `${props.data.text.substring(0, 200)}....`
    : props.data.text;

  // agr readmore true hai to fir readmore show hoga and first 200 character show honge
  //else agr wo false hai to pura text show hoga, esliye i wrote props.data.text
  //and showless will be there after the text ends.
  // here we are extracted a string from text and embedded it as a single string of at max 200 characters.

  function readmoreHandler() {
    setReadmore(!readmore);
  }
  function removeTour() {}
  return (
    <div className="card">
      <img src={props.data.image} className="image"></img>
      <div className="tour_info">
        <div className="tour-details">
          <h4 className="tour_price">₹ {props.data.price}</h4>
          <h4 className="tour_name">{props.data.name}</h4>
        </div>
        <div className="description">
          {desc}
          <span className="readmore" onClick={readmoreHandler}>
            {readmore ? `readmore` : `showless`}
            {/* readmore agr true hai to readmore show kro, else showless show kro */}
          </span>
        </div>
      </div>
      <button
        className="btnred"
        onClick={() => {
          props.remove_entry(props.data.id);
        }}
      >
        Not Intrested
      </button>
    </div>
  );
}

export default Card;
