import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './layouts/TopNav';
import '../../../public/css/app.css';
import Newsfeed from './home/Newsfeed';

function Main() {
    return (
        <div>
            <TopNav />
            <div className='row justify-content-center'>
                <div className='col-md-3'>

                </div>
                <div className='col-md-6'>
                    <Newsfeed/>
                </div>
                <div className='col-md-3'>
                    
                </div>
            </div>
        </div>
    );
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
