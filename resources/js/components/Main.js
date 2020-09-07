import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './layouts/TopNav';
import Newsfeed from './home/Newsfeed';
import LeftSideBar from './home/LeftSideBar';
import RightSideBar from './home/RightSideBar';

function Main() {
    return (
        <div>
            <TopNav />
            <div className='row justify-content-center' style={{paddingTop:"70px"}}>
                <div className='col-md-3 pl-0'>
                    <LeftSideBar/>
                </div>
                <div className='col-md-6'>
                    <Newsfeed/>
                </div>
                <div className='col-md-3'>
                    <RightSideBar/>
                </div>
            </div>
        </div>
    );
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
