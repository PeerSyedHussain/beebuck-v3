import React, { Component } from 'react';

class RightSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
                <div>
                    <div className="list-group leftside-bar" 
                    style={{
                        overflowY:"scroll",
                        overflowX:"hidden",
                        // maxHeight:height,
                        position:"fixed"
                        }}>
                    <h5>Your Own Pages</h5>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/profile.png'/>
                        </div>
                        Profile
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action ">
                        <div className='user-icon'>
                            <img src='/images/friends.png'/>
                        </div>
                        Friends
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/group/own_pages.png'/>
                        </div>
                        Pages you own
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/group/your_pages.png'/>
                        </div>
                        Your Pages
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/group/groups_1.png'/>
                        </div>
                        Groups
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/group/sub_group_1.png'/>
                        </div>
                        Sub-groups
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/chat.png'/>
                        </div>
                        Chat
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/bell.png'/>
                        </div>
                        Notification
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/photos.png'/>
                        </div>
                        Photos
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/video.png'/>
                        </div>
                        Videos
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/file.png'/>
                        </div>
                        Files
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/bell.png'/>
                        </div>
                        Birthday's
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/privacy.png'/>
                        </div>
                        Privacy Settings
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/ourpolicie.png'/>
                        </div>
                        Our Policies
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/profile.png'/>
                        </div>
                        <label className='m-0 mr-3'>English</label>
                        <label className="switch m-0">
                            <input type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                        <label className='m-0 ml-3'>Thai</label>
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/profile.png'/>
                        </div>
                        Help and Support
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/changepassword.png'/>
                        </div>
                        Change Password
                    </a>
                    <a href="#"
                        className="list-group-item list-group-item-action">
                        <div className='user-icon'>
                            <img src='/images/icons/signout.png'/>
                        </div>
                        Sign out
                    </a>
                </div>
                </div>
            </>
        );
    }
}

export default RightSideBar;