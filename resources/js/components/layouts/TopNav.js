import React, { Component } from 'react';
import { Navbar, Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faUserFriends, faLayerGroup, faTv, faGamepad, faPlus, faSms, faBell, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import SearchModel from '../models/SearchModel';

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            homeActive : false, 
            imgurl : '/images/home1.png'     
        };
    }

    checkActive(e,linkName){
        e.preventDefault();
        console.log(e,linkName)

        this.setState({
            homeActive : !this.state.homeActive,
            imgurl : '/images/home_unselected.png'
        })
    }
    render() {
        const { imgurl} = this.state
        return (
            <>
{/* 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> */}


                <Navbar bg="white" expand="lg" id='topNav'>
                    <Navbar.Brand href="#">
                        <img src="/images/bee-beebuck.png" className='w-100'/>
                    </Navbar.Brand>
                    <Form inline className='search-form'>
                        <FormControl type="text" placeholder="Search Beebuck" className="mr-sm-2 search" />
                        <img src="/images/search.png" className='w-100 search-icon'/>
                        <SearchModel modalShow={this.handleOverAllSearch}/>
                    </Form>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    <div className='row w-100'>
                        <Nav className="col-md-8 justify-content-around pl-3">                        
                            <Nav.Link href="#home" data-toggle="tooltip" 
                                    data-placement="bottom" title="Home" data-animation='true'
                                    onClick={(e) => this.checkActive(e,'home')}>
                                    <img src={imgurl} style={{width:"2em"}} />
                                {/* <FontAwesomeIcon  icon={faHome} pull="right" className="highlight" size="2x" style={{color:this.state.homeActive ? "red" : "blue"}} /> */}
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
                        </Nav>

                        <div className='col-md-4 d-flex justify-content-around align-items-center'>
                            <div className='user-identity d-flex'>
                                <Nav.Link href='#' className='user-logo mx-2 p-0'>
                                    <img src='/images/sample/user-profile.jpg' className='w-100'/>
                                </Nav.Link>
                                <Navbar.Brand href="#">Faizal</Navbar.Brand>
                            </div>
                            <div className="dropdown show">
                                <a className='icons-outer' href="#" 
                                    id="create" data-toggle="dropdown" 
                                    aria-haspopup="true" aria-expanded="false">
                                        <img src='/images/icons/add.png'  className="w-50 search-icon"/>
                                </a>
                                <div className="dropdown-menu create" aria-labelledby="create">
                                    <div className="list-group">
                                        <h3>Create</h3>
                                       
                                        <a href="#" className="list-group-item list-group-item-action ">
                                            <div className='icons-outer'>
                                                <img src='/images/group/your_pages.png' className='w-50'/>
                                            </div>
                                            <div className='mx-3'>
                                                <h5 className='m-0'>Pages</h5>
                                                <p className='m-0'>Create your own pages</p>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action ">
                                            <div className='icons-outer'>
                                                <img src='/images/chat.png' className='w-50'/>
                                            </div>
                                            <div className='mx-3'>
                                                <h5 className='m-0'>Chat</h5>
                                                <p className='m-0'>Create Group Chat</p>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action ">
                                            <div className='icons-outer'>
                                                <img src='/images/group/your_pages.png' className='w-50'/>
                                            </div>
                                            <div className='mx-3'>
                                                <h5 className='m-0'>Post</h5>
                                                <p className='m-0'>Create your post</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                           
                             <div className="dropdown show">
                                <a className='icons-outer' href="#" 
                                    id="account" data-toggle="dropdown" 
                                    aria-haspopup="true" aria-expanded="false">
                                        <img src='/images/icons/3_dot_vertical.png'  className="w-50 search-icon"/>
                                </a>

                                <div className="dropdown-menu account" aria-labelledby="account">
                                    <a href="#" className="list-group-item list-group-item-action ">
                                        <div className='user-logo'>
                                            <img src='/images/sample/user-profile.jpg' className='w-100'/>
                                        </div>
                                        <div className='mx-3'>
                                            <h5 className='m-0'>Faizal Hussain</h5>
                                            <p className='m-0'>See your profile</p>
                                        </div>
                                    </a>
                                    <hr/>
                                    <a href="#"
                                        className="list-group-item list-group-item-action">
                                        <div className='icons-outer mr-3'>
                                            <img src='/images/privacy.png' className='w-50'/>
                                        </div>
                                        Privacy Settings
                                    </a>
                                    <a href="#"
                                        className="list-group-item list-group-item-action">
                                        <div className='icons-outer mr-3'>
                                            <img src='/images/profile.png' className='w-50'/>
                                        </div>
                                        Help and Support
                                    </a>
                                    <a href="#"
                                        className="list-group-item list-group-item-action">
                                        <div className='icons-outer mr-3'>
                                            <img src='/images/icons/signout.png' className='w-50'/>
                                        </div>
                                        Sign out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default TopNav;