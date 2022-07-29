import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './NavBar.css';
import './Upper.css';
import { FiAlignRight, FiXCircle, FiChevronDown } from 'react-icons/fi';

function NavBar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);

  /* ----------------- */
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ['main-menu menu-right menuq1'];
  if (isMenu) {
    boxClass.push('menuq2');
  } else {
    boxClass.push('');
  }

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ['sub__menus'];
  if (isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  } else {
    boxClassSubMenu.push('');
  }

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <>
      <div className="bg-image">
        <div>
          <div className="topbar-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <ul className="topbar-list">
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter-square"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram-square"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>+123 456 7890</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>contact @domain.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6">
                  <ul className="topbar-others-options">
                    {/* <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li> */}
                    <div className="d-inline mb-1" style={{ marginTop: '10px' }}>
                      <DropdownButton
                        variant="success"
                        id="dropdown-basic-button"
                        title="Sign In"
                        className="d-inline mb-2 ms-3"
                      >
                        <Dropdown.Item href="#/action-1">Sign in as user</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Sign in as agent</Dropdown.Item>
                      </DropdownButton>
                      <DropdownButton
                        variant="warning"
                        id="dropdown-basic-button"
                        title="Sign Up"
                        className="ms-2 d-inline"
                        style={{ color: 'white !important' }}
                      >
                        <Dropdown.Item href="#/action-1">Sign Up as user</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Sign Up as agent</Dropdown.Item>
                      </DropdownButton>
                    </div>
                    <li className="yes not">
                      <div className="okay">
                        <select class="fixed">
                          <option selected value="1">
                            English
                          </option>
                          <option value="2">French</option>
                        </select>
                      </div>
                    </li>
                    {/* <li>
                      <div className="dropdown language-option">
                      <button
                          class="dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span class="lang-name">USD</span>
                        </button>
                        <div className="dropdown-menu language-dropdown-menu">
                          <a class="dropdown-item" href="#">
                            USD
                          </a>
                          <a class="dropdown-item" href="#">
                            BD
                          </a>
                          <a class="dropdown-item" href="#">
                            URO
                          </a>
                        </div>
                      </div>
                    </li> */}
                    <li className="yes">
                      <div className="okay">
                        <select class="fixed">
                          <option selected value="1">
                            USD
                          </option>
                          <option value="2">BD</option>
                          <option value="2">URO</option>
                        </select>
                        {/* <select
                          class="form-select okay"
                          aria-label="Default select example"
                          style={{ background: 'none', border: 'none' }}
                        >
                          <option selected>One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav className={navbar ? 'main_header_arae newactive' : 'main_header_arae'}>
            <div className="nav-container main_header">
              <div className="mb-3 ut-1">
                <NavLink end to="/" className="nav-logo mb-3">
                  <img src="images/newlogo.png" alt="" />
                </NavLink>
              </div>

              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <div className="d-flex justify-content-center align-items-center ut-2">
                  <li className="nav-items">
                    <NavLink
                      end
                      to="/"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-items">
                    <NavLink
                      end
                      to="/about"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-items">
                    <NavLink
                      end
                      to="/services"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Services
                    </NavLink>
                  </li>

                  <li className="nav-items">
                    <NavLink
                      end
                      to="/contact"
                      activeClassName="active"
                      className="nav-links"
                      onClick={handleClick}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </div>
                <div className="d-inline mb-1" style={{ marginTop: '10px' }}>
                  <button className="btn btn-warning">Become an Agent</button>
                  {/* <DropdownButton
                    variant="success"
                    id="dropdown-basic-button"
                    title="Sign In"
                    className="d-inline mb-2 ms-3"
                  >
                    <Dropdown.Item href="#/action-1">Sign in as user</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Sign in as agent</Dropdown.Item>
                  </DropdownButton> */}
                  {/* <DropdownButton
                    variant="warning"
                    id="dropdown-basic-button"
                    title="Sign Up"
                    className="ms-2 d-inline"
                  >
                    <Dropdown.Item href="#/action-1">Sign Up as user</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Sign Up as agent</Dropdown.Item>
                  </DropdownButton> */}
                </div>
              </ul>
              <div className="nav-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
              </div>
            </div>
          </nav>
        </div>
        <div class="tourz-search">
          <div class="container">
            <div class="row">
              <div class="tourz-search-1">
                <h1 style={{ fontSize: '44px' }}>Your One stop site for Umrah & Hajj rituals</h1>
                <div class="tourz-hom-ser">
                  {/* <button className="btn btn-success me-3">User Login</button>
                <button className="btn btn-warning">Agent Login</button> */}
                  {/* <ul>
                  <li>
                    <a
                      href="booking-tour-package.html"
                      class="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp"
                      data-wow-duration="0.5s"
                      ><img src="images/icon/2.png" alt="" /> Tour</a
                    >
                  </li>
                  <li>
                    <a
                      href="booking-flight.html"
                      class="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp"
                      data-wow-duration="1s"
                      ><img src="images/icon/31.png" alt="" /> Flight</a
                    >
                  </li>
                  <li>
                    <a
                      href="booking-car-rentals.html"
                      class="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp"
                      data-wow-duration="1.5s"
                      ><img src="images/icon/30.png" alt="" /> Car Rentals</a
                    >
                  </li>
                  <li>
                    <a
                      href="booking-hotel.html"
                      class="waves-effect waves-light btn-large tourz-pop-ser-btn wow fadeInUp"
                      data-wow-duration="2s"
                      ><img src="images/icon/1.png" alt="" /> Hotel</a
                    >
                  </li>
                </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
