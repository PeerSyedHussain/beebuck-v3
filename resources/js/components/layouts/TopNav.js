import React, { Component } from 'react';
import { Navbar, Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faUserFriends, faLayerGroup, faTv, faGamepad, faPlus, faSms, faBell, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import SearchModel from '../models/SearchModel';

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    
    render() {
        return (
            <>
                <Navbar bg="white" expand="lg" id='topNav'>
                    <Navbar.Brand href="#">
                        <img src="/images/bee-beebuck.png" className='w-100'/>
                    </Navbar.Brand>
                    <Form inline className='search-form'>
                        <FormControl type="text" placeholder="Search Beebuck" className="mr-sm-2 search" />
                        <img src="/images/search.png" className='w-100 search-icon'/>
                        {/* <FontAwesomeIcon  icon={faSearch} pull="right" className="highlight search-icon" size="1x" /> */}
                        <SearchModel modalShow={this.handleOverAllSearch}/>
                    </Form>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    <div className='row w-100'>
                        <Nav className="col-md-8 justify-content-around pl-3">                        
                            <Nav.Link href="#home" data-toggle="tooltip" 
                                    data-placement="bottom" title="Home" data-animation='true'>
                                <FontAwesomeIcon  icon={faHome} pull="right" className="highlight" size="2x" />
                            </Nav.Link>
                            <Nav.Link href="#home" data-toggle="tooltip" 
                                    data-placement="bottom" title="Friends" data-animation='true'>
                                <FontAwesomeIcon  icon={faUserFriends} pull="right" className="highlight" size="2x" />
                            </Nav.Link>
                            <Nav.Link href="#home" data-toggle="tooltip" 
                                    data-placement="bottom" title="Groups" data-animation='true'>
                                <FontAwesomeIcon  icon={faLayerGroup} pull="right" className="highlight" size="2x" />
                            </Nav.Link>
                            <Nav.Link href="#home" data-toggle="tooltip" 
                                    data-placement="bottom" title="Watch" data-animation='true'>
                                <FontAwesomeIcon  icon={faTv} pull="right" className="highlight" size="2x" />
                            </Nav.Link>
                            <Nav.Link href="#home" data-toggle="tooltip" 
                                    data-placement="bottom" title="Gaming" data-animation='true'>
                                <FontAwesomeIcon  icon={faGamepad} pull="right" className="highlight" size="2x" />
                            </Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>

                        <div className='col-md-4 d-flex justify-content-around align-items-center'>
                            <div className='user-identity d-flex'>
                                <Nav.Link href='#' className='user-logo mx-2 p-0'>
                                    <img src='/images/beebuck-logo.png' className='w-100'/>
                                </Nav.Link>
                                <Navbar.Brand href="#">Faizal</Navbar.Brand>
                            </div>
                            <div className='icons-outer'data-toggle="tooltip" 
                                    data-placement="bottom" title="Create" data-animation='true'>
                                <FontAwesomeIcon  icon={faPlus}  
                                    className="highlight search-icon" 
                                    size="1x" />     
                            </div>
                            <div className='icons-outer'data-toggle="tooltip" 
                                    data-placement="bottom" title="Messenger" data-animation='true'>
                                <FontAwesomeIcon  icon={faSms}  
                                    className="highlight search-icon" 
                                    size="1x" />     
                            </div>
                            <div className='icons-outer'data-toggle="tooltip" 
                                    data-placement="bottom" title="Notification" data-animation='true'>
                                <FontAwesomeIcon  icon={faBell}  
                                    className="highlight search-icon" 
                                    size="1x" />
                            </div>
                            <div className='icons-outer' data-toggle="tooltip" 
                                    data-placement="bottom" title="Account" data-animation='true'>
                                <FontAwesomeIcon  icon={faAngleDown}  
                                    className="highlight search-icon" 
                                    size="1x" />     
                            </div>
                        </div>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default TopNav;