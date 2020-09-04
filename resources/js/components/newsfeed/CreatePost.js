import React, { Component } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoVideo, faFile, faVideo } from '@fortawesome/free-solid-svg-icons';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
                <div className='card create-post'>
                    <div className='card-body'>
                        <div className='d-flex'>
                            <div className='user-logo'>
                                <img src='/images/beebuck-logo.png' className='w-100'/>
                            </div>
                            <Form inline className='createpost ml-3'>
                                <FormControl type="text" placeholder="Whats on your mind Faizal?" className="mr-sm-2 post" />
                            </Form>
                        </div>
                        <hr/>
                        <div className='row justify-content-around'>
                            <div className='col-sm-3 post-options'>
                                <div className='post-img'>
                                    <img src='/images/photos.png' className='w-100'/>
                                </div> 
                                <p className='mx-2'>Photos</p>
                            </div>
                            <div className='col-sm-3 post-options'> 
                                <div className='post-img'>
                                    <img src='/images/video.png' className='w-100'/>
                                </div> 
                                <p className='mx-2'>Videos</p>
                            </div>
                            <div className='col-sm-3 post-options'> 
                                <div className='post-img'>
                                    <img src='/images/file.png' className='w-100'/>
                                </div> 
                                <p className='mx-2'>Files</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CreatePost;