import React, { Component } from 'react';
import Story from '../newsfeed/Story';
import CreatePost from '../newsfeed/CreatePost';
import UploadedPost from '../newsfeed/UploadedPost';

class Newsfeed extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
                <Story></Story>
                <div className='col-md-11 mx-auto'>
                    <CreatePost/>
                    <UploadedPost/>
                </div>
            </>
        );
    }
}

export default Newsfeed;