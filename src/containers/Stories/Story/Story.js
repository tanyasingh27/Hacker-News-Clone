import React, {Component} from 'react';
import axios from 'axios';
import './Story.css';
import {mapTime} from '../../../components/TimeMapping/MapTime';

class Story extends Component{
    state={
       url: null,
       title: null,
       score: 0,
       by: null,
       time: null,
       comments: null
    }

    componentDidMount(){
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
        .then(response => {
            const item = response.data;
            this.setState({
                url: item.url,
                title: item.title,
                score: item.score,
                by: item.by,
                time: mapTime(item.time),
                comments: item.descendants,
                type: item.type
            });
        })
        .catch(error => {
            console.log(error);
        })
    }

    render(){
        let score= null, up =null;
        let url = (this.state.url)? `(${(this.state.url).split("/")[2].replace("www.","")})`: null;
        let misc = null;
        if(this.state.type !== "job"){
            up= <i className="fas fa-chevron-circle-up"></i> ;
            score =  <span> {this.state.score} points by {this.state.by} </span>;
            misc =  (<span> | hide |{(this.props.isNew) ? " past | web |" : null } {(this.state.comments) ? this.state.comments + " comments" : "discuss"} </span>);
        }
       
        return (
            <div className='story'>
                <p>{up} <a href={this.state.url}>{this.state.title}<span className="url">{url}</span></a></p>
                <span> {score}{this.state.time} {misc}</span>
            </div>
        );
    }
}

export default Story;
