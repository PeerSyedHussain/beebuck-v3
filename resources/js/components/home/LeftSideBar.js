import React, { Component } from 'react';

class LeftSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
             width: 0, 
             height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
      updateWindowDimensions() {
        this.setState({
            width: window.innerWidth, height: window.innerHeight -60.8
        },() =>  {
            console.log(window.innerHeight-60.8)
        });
    }

    render() {
        const {height} = this.state

        return (
            <>
                <div className="list-group leftside-bar" 
                    style={{
                        overflowY:"scroll",
                        overflowX:"hidden",
                        maxHeight:height,
                        position:"fixed"
                        }}>
                    <a href="#"
                        className="list-group-item list-group-item-action d-flex flex-column align-items-center">
                        <div className='user-image'>
                            <img src='/images/bee-beebuck.png' className='w-100'/>
                        </div>
                        <h4>Beebuck</h4>
                    </a>
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
            </>
        );
    }
}

export default LeftSideBar;