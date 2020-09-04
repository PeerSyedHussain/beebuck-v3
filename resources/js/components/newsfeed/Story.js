import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className='story card my-3'>
                <div className='card-body'>
                    <div className='d-flex box'>
                        <div className='icons-outer mr-3'>
                            <FontAwesomeIcon  icon={faPlus}  
                                className="highlight search-icon" 
                                size="1x" 
                            />     
                        </div>
                        <div>
                            <h5>Create a Story</h5>
                            <p>Share a photo or write something</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
    
export default Story;                