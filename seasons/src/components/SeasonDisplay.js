import React from 'react';
import './SeasonDisplay.css'

//month from 0 to 11 (12 month)
const getSeason = (lat, month) => {
  if(month > 1 && month < 8) {
    return (lat > 0 ? 'spring-summer' : 'autumn-winter')
  } else {
    return (lat > 0 ? 'autumn-winter' : 'spring-summer')
  }
}

const seasonConfig = {
  'autumn-winter': {
    text: 'Brr, it\'s chilly',
    iconName: 'snowflake'
  },
  'spring-summer': {
    text: 'Let\'s hit the beach',
    iconName: 'sun'
  }
}

//component
const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth())
  //refactoring
  // const text = season === 'autumn-winter' ? 'Brr, it\'s chilly' : 'Let\'s hit the beach'
  // const icon = season === 'autumn-winter' ? 'snowflake' : 'sun'
  const {text, iconName} = seasonConfig[season]
  
  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} outline icon massive`} />
      <h1>Now season is: {season} </h1>
      <h2>{text}</h2>
      <i className={`${iconName} outline icon massive`} />
    </div>
  );
};

export default SeasonDisplay;
