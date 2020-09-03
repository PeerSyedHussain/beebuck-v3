import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './layouts/TopNav';
import '../../../public/css/app.css';

function Main() {
    return (
        <div>
            <TopNav />
        </div>
    );
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
