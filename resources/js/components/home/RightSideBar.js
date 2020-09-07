import React, { Component } from 'react';

class RightSideBar extends Component {
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
        const {height} = this.state;
        return (
            <>
                <div className="list-group rightside-bar mt-3" 
                    style={{
                        overflowY:"scroll",
                        overflowX:"hidden",
                        maxHeight:height,
                        position:"fixed"
                        }}>
                    <h5 className='heading'>Your Own Pages</h5>
                    <a href="#" className="list-group-item list-group-item-action ">
                        <div className='frequent-page-logo'>
                            <img src='/images/group/your_pages.png' className='w-100'/>
                        </div>
                        <div className='mx-3'>
                            <h5 className='m-0'>Your Page Name 1</h5>
                            <p className='m-0'>facebook.com</p>
                        </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action ">
                        <div className='frequent-page-logo'>
                            <img src='/images/group/your_pages.png' className='w-100'/>
                        </div>
                        <div className='mx-3'>
                            <h5 className='m-0'>Your Page Name 2</h5>
                            <p className='m-0'>beebuckapp.com</p>
                        </div>
                    </a>
                    <hr className='w-100'/>

                    <h5 className='heading'>Page</h5>
                    <a href="#" className="list-group-item list-group-item-action ">
                        <div className='icons-outer'>
                            <img src='/images/group/your_pages.png' className='w-50'/>
                        </div>
                        <div className='mx-3'>
                            {/* <h5 className='m-0'>Pages</h5> */}
                            <p className='m-0'>Create your own page</p>
                        </div>
                    </a>

                    <hr className='w-100'/>
                    <h5 className='heading'>Chat</h5>
                    <a href="#" className="list-group-item list-group-item-action ">
                        <div className='icons-outer'>
                            <img src='/images/chat.png' className='w-50'/>
                        </div>
                        <div className='mx-3'>
                            {/* <h5 className='m-0'>Chat</h5> */}
                            <p className='m-0'>Create Group Chat</p>
                        </div>
                    </a>
                </div>
            </>
        );
    }
}

export default RightSideBar;