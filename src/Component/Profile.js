import React, { Component } from 'react'


export default class Profile extends Component {
  constructor(props) {
		console.log("component init");
		super(props);
		this.Profile = { fullName:"ARWA BEN JEBLI",
    bio:"developper",
    profession:"Full stack JS",
imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXJUrnnjc_i_f_k6ZdCqfTqfxOU3mnkz1gA&usqp=CAU'};

this.state={count:0}
	}
  componentDidMount(){
    setInterval(()=>{
        this.setState(prevState=>({
            count:prevState.count+1
        }))
    },1000)
}
componentWillUnmount(){
clearInterval(this.state)
}
  render() {
    return (
      <div>
         <div>counter:{this.state.count}</div>
        <h1>{this.Profile.fullName}</h1>
        <h2>{this.Profile.bio} </h2>
        <h3>{this.Profile.profession}</h3>
        <img src={this.Profile.imgSrc}alt='myphoto' style={{width:'400px'}}/>
      </div>
    )
  }
}
