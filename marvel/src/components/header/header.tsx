import { NavLink } from "react-router-dom";
import { Paths } from "src/routing/path";

//@ts-ignore
import img from './logo.svg'
const Header = () => { 
  	return(
		<header className="marvel-header">  
	  		<img alt="Marvel" className="header-logo" onClick={() => {
				const headerNav = document.querySelectorAll(".header-navigation");
            headerNav.forEach((le:any) => {
                le.classList.toggle("hide");
			})
		}}
			src={img} />
	  <menu className="header-navigation">
	  <div className="menu-home"><NavLink to={Paths.main} className="double-border-button">Home</NavLink></div>
	  <div className="menu-characters"><NavLink to={Paths.characters} className="double-border-button">Characters</NavLink> </div>
	  <div className="menu-comics"><NavLink to={Paths.comics} className="double-border-button">Comics</NavLink></div>
	  <div className="menu-creators"><NavLink to={Paths.creators} className="double-border-button">Creators</NavLink></div>
	  <div className="menu-events"><NavLink to={Paths.events} className="double-border-button">Events</NavLink></div>
	  <div className="menu-series"><NavLink to={Paths.series} className="double-border-button">Series</NavLink></div>
	  <div className="menu-stories"><NavLink to={Paths.stories} className="double-border-button">Stories</NavLink></div>
	  </menu>
		</header>
  	)
}
export default Header;