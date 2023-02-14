import './seasonDisplay.css';
import React from 'react';

const seasonConfig={
    summer:{
        text:'lets hit the beach',
        IconName:'sun'
    },
    winter :{
        text:'it is chilly',
        IconName:'snowflake'
    }
};
const getSeason =(lat,month)=>{
    if(month>2 && month<9){
        return lat>0 ? 'summer':'winter';
    }else{
       return lat>0 ? 'winter':'summer';
    }
};
const SeasonDisplay = (props) =>{
    const Season = getSeason(props.lat,new Date().getMonth());
    const{text,IconName} =seasonConfig[Season];
    //const display = Season==='winter'?'it is chilly':'lets hit the beach';
    //for icon
   // const Icon = Season ==='winter'?'snowflake' : 'sun'; 
return (
<div className ={`season-display ${Season}`}>
    <i className ={`icon-left massive ${IconName} icon`}/>
    <h1>{text}</h1>
    <i className ={`icon-right massive ${IconName} icon`}/>
    </div>
    
    );
};
export default SeasonDisplay;
