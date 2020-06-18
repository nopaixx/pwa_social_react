import React, { Component } from 'react';
import NavigationItem from '../components/NavigationItem'
import SearchLogo from '../static/images/search-icon.svg';
import NetflixLogo from '../static/images/Netflix_Logo_RGB.png';
import BellLogo from '../static/images/bell-logo.svg';
import DropdownArrow from '../static/images/drop-down-arrow.svg';
import DropdownContent from "../components/DropdownContent";


class navigation extends Component {
  state = {
    scrolling: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  /** changes the scrolling state depending on the Y-position */
  handleScroll = (event) => {
    if (window.scrollY === 0) {
      this.setState({ scrolling: false });
    }
    else if (window.scrollY > 50) {
      this.setState({ scrolling: true });
    }
  }


  render() {
    const { scrolling } = this.state;
    const { showMovies } = this.props;
    console.log("YOUTUBE-",this.props)
	
    if(!this.props.youtube){
    	return ''
    }
    return (
      <nav className={"navigation " + (scrolling ? "black" : "")} >
        <ul className="navigation__container">
          <NavigationItem link="/" exact><img className="navigation__container--logo" src={this.props.youtube.channel_list.items[0].snippet.thumbnails.default.url} alt="" /></NavigationItem>
          <DropdownArrow className="navigation__container--downArrow-2"></DropdownArrow>
          <div className="navigation__container-link pseudo-link">Una seccion puede ir aqui</div>


          <div className="navigation__container--left">
            <SearchLogo className="logo" />

            <input
              onChange={()=>{}}
              className="navigation__container--left__input"
              type="text"
              placeholder="Title, genres, people" />

          </div>

          <BellLogo className="navigation__container--bellLogo" />

          <DropdownContent />
          <DropdownArrow className="navigation__container--downArrow" />

        </ul>
      </nav>
    )
  }
}

export default navigation; 
