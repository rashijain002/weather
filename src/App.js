import React from 'react';
import Loader from './Loading';
import SeasonDisplay from './seasonDisplay';

class App extends React.Component{
     
    /*  constructor(props){
         super(props);
         this.state={lat:null,errorMessage:''};
     } */
    //all of this things in constructor is equivalent to the
    state ={lat:null,errorMessage:''};
     componentDidMount(){ 
  window.navigator.geolocation.getCurrentPosition(
             position => {
                 this.setState({lat:position.coords.latitude});
             },
             err=>{
                 this.setState({errorMessage:err.message});
             }
             );
  }
     render(){
            /*  return (
             <div>
                 latitude :{this.state.lat}
                 <br></br>
                 error:{this.state.errorMessage}
                 </div>
                 ); */
                 //shortest way of wriiting this w/o showing error msg to user
                 if(this.state.errorMessage&& !this.state.lat){
                     return <div>Error:{this.state.errorMessage}</div>
                 }
                   if(!this.state.errorMessage&& this.state.lat){
                     return <SeasonDisplay lat={this.state.lat} />
                     
                 }
                   
                     return <Loader message = "please accept location request"/>;
                 
     }
 }

export default App;