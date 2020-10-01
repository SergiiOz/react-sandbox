import React from 'react';
import './SeasonDisplay.css';

//month from 0 to 11 (12 month)
const getSeason = (lat, month) => {
  if (month > 1 && month < 8) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const seasonConfig = {
  winter: {
    text: "Brr, it's chilly",
    iconName: 'snowflake',
  },
  summer: {
    text: "Let's hit the beach",
    iconName: 'sun',
  },
};

//component
const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  //refactoring
  // const text = season === 'autumn-winter' ? 'Brr, it\'s chilly' : 'Let\'s hit the beach'
  // const icon = season === 'autumn-winter' ? 'snowflake' : 'sun'
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} outline icon massive`} />
      <div>
        <h2>Now season is: {season} </h2>
        <h1>{text}</h1>
      </div>
      <i className={`icon-right ${iconName} outline icon massive`} />
    </div>
  );
};

export default SeasonDisplay;
