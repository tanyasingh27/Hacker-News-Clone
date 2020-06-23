import React, {Component} from 'react';
import axios from 'axios';
import Story from './Story/Story';
import './Stories.css';

class Stories extends Component{
    _isMounted = false;
    
    state={
        stories: null,
        startIndex: 0,
        endIndex: 30
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.endIndex !== this.state.endIndex || prevProps.type !== this.props.type){
            this.storiesLoader();
        }
    }

    componentDidMount(){
       this._isMounted = true; 
       if(this._isMounted){
        this.storiesLoader();
       }
    }

    componentWillUnmount(){
        this._isMounted= false;
    }
    
    storiesLoader = () => {
        axios.get(`https://hacker-news.firebaseio.com/v0/${this.props.type}.json?print=pretty`)
        .then(response => {
            const stories = response.data.slice(this.state.startIndex, this.state.endIndex);
            this.setState({stories: stories});
        })
        .catch(error => {
            alert("OOPS! Error Occured. Please Reload! \n "+error);
        })
    }

    changeIndexHandler = () => {
        this.setState((prevState) => ({startIndex: prevState.startIndex+30,
         endIndex: prevState.endIndex+30}));
    }

    render(){
        let isNew = false;
        if(this.props.type === "newstories"){
            isNew = true;
        }
        let items = null;
        if(this.state.stories){
            items = this.state.stories.map(i => <li key={i}><Story id={i} isNew={isNew}/></li>)
        }
        let style = null;
        if(this.props.type==="jobstories"){
            style = {listStyle: "none"};
        }
        return (
          <div className="stories">
            <ol start={this.state.startIndex + 1} style={style}>
            {items}
            </ol>
            <button onClick={this.changeIndexHandler}> More </button>
            <hr/>
          </div>
        );
    }
}

export default Stories;
