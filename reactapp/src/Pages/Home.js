import React, { Component } from 'react';
import HomeHeader from '../Components/HomeHeader';
import CreatePost from '../Components/CreatePost';
import Posts from '../Components/Posts';
import Loader from '../Components/loader';


class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            Loading:false,
        }
    }
    
    LoadingState=()=>this.setState({...this.state,Loading:!this.state.Loading})

   

    render() {
        
        return (
            <>
            {
                this.state.Loading===true?
                <Loader/>
                :
                <div className="container mt-4 pb-4">
                <div>
                <HomeHeader/>
                </div>
                <div>
                <CreatePost Loader={this.LoadingState}/>
                </div>
                <div className="mt-4">
                <Posts Loader={this.LoadingState}/>
                </div>
            </div>
            }
            
            </>
        );
    }
}

export default Home;