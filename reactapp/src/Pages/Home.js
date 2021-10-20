import React, { Component } from 'react';
import HomeHeader from '../Components/HomeHeader';
import CreatePost from '../Components/CreatePost';
import Posts from '../Components/Posts';

class Home extends Component {
    
    render() {
        
        return (
            <div className="container mt-4 pb-4">
                <div>
                <HomeHeader/>
                </div>
                <div>
                <CreatePost/>
                </div>
                <div className="mt-4">
                <Posts/>
                </div>
            </div>
        );
    }
}

export default Home;