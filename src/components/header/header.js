import React from "react";

import "./header.scss";
import logo from "./../../assets/img/logo.png";

import { Link } from "react-router-dom";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.headerNavbar = React.createRef();
    this.menuWrapper = React.createRef();
    this.hamburger = React.createRef();
    this.state = {
      navLinks: [
        // {
        //   linkName: "Home",
        //   linkAdd: "#root",
        //   active: false,
        //   useNavLink: true,
        // },
        {
          linkName: "Praxisteam",
          linkAdd: "#praxisteam",
          active: false,
          useNavLink: false,
        },

        {
          linkName: "Sprechzeiten",
          linkAdd: "#sprechzeiten",
          active: false,
          useNavLink: false,
        },
        {
          linkName: "Leistungsspektrum",
          linkAdd: "leistungsspektrum",
          active: false,
          useNavLink: true,
        },
        {
          linkName: "Kontakt",
          linkAdd: "kontakt",
          active: false,
          useNavLink: true,
        },
        {
          linkName: "Kollegin/Kollege gesucht",
          linkAdd: "kollegegesucht",
          active: false,
          useNavLink: true,
        },
      ],
      scrollCheck: false,
    };
  }

  handleHamburger = () => {
    if (window.innerWidth < 1000) {
      this.hamburger.current.classList.toggle("open");
      const submenu = this.menuWrapper.current;
      if (!submenu.classList.contains("menuWrapper_display")) {
        submenu.classList.add("menuWrapper_display");
        setTimeout(function () {
          submenu.classList.add("menuWrapper_fadein");
        }, 10);
      } else {
        submenu.classList.remove("menuWrapper_fadein");
        setTimeout(function () {
          submenu.classList.remove("menuWrapper_display");
        }, 500);
      }
    }
  };

  componentDidMount() {
    var prevScrollPos = window.pageYOffset;
    document.addEventListener("scroll", () => {
      let currentScrollPos = window.pageYOffset;
      if (this.headerNavbar.current) {
        if (currentScrollPos > prevScrollPos && currentScrollPos > 640) {
          this.headerNavbar.current.style.top = "-100px";
          this.hamburger.current.style.top = "-100px";
        } else {
          this.headerNavbar.current.style.top = "0px";
          this.hamburger.current.style.top = "14px";
        }
      }
      prevScrollPos = currentScrollPos;
    });
  }

  render() {
    const navlinks = this.state.navLinks.map((navLink) => {
      return (
        <div className="navLink" onClick={this.handleHamburger}>
          {navLink.useNavLink && (
            <Link smooth to={`/${navLink.linkAdd}`}>
              {navLink.linkName}
            </Link>
          )}
          {!navLink.useNavLink && (
            <a href={`/${navLink.linkAdd}`}>{navLink.linkName}</a>
          )}
        </div>
      );
    });

    return (
      <>
        <div className="menuWrapper" ref={this.menuWrapper}>
          <div className="linksWrapper">{navlinks}</div>
        </div>
        <div className="header-wrap" ref={this.headerNavbar}>
          <div className="brandLogo">
            <Link smooth to="/#root">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="navLinks">
            <div className="desktopView">{navlinks}</div>
          </div>
        </div>
        <div ref={this.hamburger} id="hamburger" onClick={this.handleHamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </>
    );
  }
}

export default Header;
