import React, { Component } from 'react';
import { Navbar, Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faUserFriends, faLayerGroup, faTv, faGamepad, faPlus, faSms, faBell, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import SearchModel from '../models/SearchModel';
import ToolTip from './ToolTip';

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
                        <img src="/images/beebuck-logo.png" className='w-100'></img>
                    </Navbar.Brand>
                    <Form inline className='search-form'>
                        <FormControl type="text" placeholder="Search Beebuck" className="mr-sm-2 search" />
                        <FontAwesomeIcon  icon={faSearch} pull="right" className="highlight search-icon" size="1x" />
                        <SearchModel />
                    </Form>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    <div className='row w-100'>
                        <Nav className="col-md-8 justify-content-around pl-3">                        
                            <Nav.Link href="#home">
                                <FontAwesomeIcon  icon={faHome} pull="right" className="highlight" size="2x" />
                            </Nav.Link>
                            <Nav.Link href="#home">
                                <FontAwesomeIcon  icon={faUserFriends} pull="right" className="highlight" size="2x" />
                            </Nav.Link>
                            <Nav.Link href="#home">
                                <FontAwesomeIcon  icon={faLayerGroup} pull="right" className="highlight" size="2x" />
                            </Nav.Link>
                            <Nav.Link href="#home">
                                <FontAwesomeIcon  icon={faTv} pull="right" className="highlight" size="2x" />
                            </Nav.Link>
                            <Nav.Link href="#home">
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
                            <ToolTip tooltip="Create">
                                <div className='icons-outer'>
                                    <FontAwesomeIcon  icon={faPlus}  className="highlight search-icon" size="1x" />     
                                </div>
                            </ToolTip>
                            <div className='icons-outer'>
                                <FontAwesomeIcon  icon={faSms}  className="highlight search-icon" size="1x" />     
                            </div>
                            <div className='icons-outer'>
                                <FontAwesomeIcon  icon={faBell}  className="highlight search-icon" size="1x" />
                            </div>
                            <div className='icons-outer'>
                                <FontAwesomeIcon  icon={faAngleDown}  className="highlight search-icon" size="1x" />     
                            </div>
                        </div>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default TopNav;