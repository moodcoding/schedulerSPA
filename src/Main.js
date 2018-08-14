import React, {Component} from 'react';
import './Main.css';


class Main extends Component{

    render(){
        return ( 
        <div className = "Main">
        <div className = "LeftMain"><LeftMain/></div>
        <div className = "RightMain"><RightMain/></div>
        </div>
        )
    }

}

class LeftMain extends Component{
    render (){
        return (<img src = "https://file.okky.kr/images/1513127807083.jpg" className = "leftImage"></img>)
    }
}

class RightMain extends Component{
    render (){
        return (<img src ="https://file.okky.kr/images/1513127807083.jpg" className = "rightImage"></img>)
    }
}


export default Main;