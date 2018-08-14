import React, {Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types'; 
import Movice from './Movie';

class Movie extends Component{


    render(){
        console.log(this.props);
     return (
      <div>
           
         <h1>
            <MoviePoster poster={this.props.poster}/>
         {this.props.title}
         </h1>
      </div>    
     )
    }
}

class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }
    render(){
        return(
            <img src = {this.props.poster}></img>
        )
    }
}

export default Movie;