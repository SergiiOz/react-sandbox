import React from 'react';

//month from 0 to 11 (12 month)
const getSeason = (lat, month) => {
  if(month > 1 && month < 8) {
    return (lat > 0 ? 'spring-summer' : 'autumn-winter')
  } else {
    return (lat > 0 ? 'autumn-winter' : 'spring-summer')
  }
}

//component
const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth())
  const text = season === 'autumn-winter' ? 'Brr, it\'s chilly' : 'Let\'s hit the beach'
  
  return (
    <div>
      <h1>Now season is: {season} </h1>
      <h2>{text}</h2>
    </div>
  );
};

export default SeasonDisplay;
