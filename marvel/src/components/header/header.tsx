import { NavLink } from "react-router-dom";
import { Paths } from "src/routing/path";

const Header = () => { 
  	return(
		<header className="marvel-header">  
	  		<img alt="Marvel" 
			src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzU5IiBoZWlnaHQ9IjEyNiIgdmlld0JveD0iMCAwIDM1OSAxMjYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSIzNTMiIGhlaWdodD0iMTIwIiByeD0iMTAiIGZpbGw9IiNEOTBEMEQiLz4KPHBhdGggZD0iTTI4Ny42MDQgMzcuNzcyN1YyMy4wMTE2SDIzNC4wODRMMjI1LjI3MyA3Mi4zMDYxTDIxNi41NjggMjMuMDExNkgxOTcuMjY4TDE5OS40MjUgMzYuMTc0NUMxOTcuMiAzMi44MDA5IDE4OS4zMDEgMjMuMDExNiAxNzEuOTEgMjMuMDExNkMxNzEuNzk1IDIzLjAwNTggMTUyLjU4NyAyMy4wMTE2IDE1Mi41ODcgMjMuMDExNkwxNTIuNTA3IDk0Ljg2MjNMMTM4LjQ0MiAyMy4wMTE2TDExMy4xNjEgMjMuMDA1OEw5OC42MDkxIDk3LjQ1MDhMOTguNjE3MyAyMy4wMTE2SDc0LjQxODNMNjUuNjk3OCA2NC44MjkyTDU3LjIwMjcgMjMuMDExNkgzM1YxMDMuOTQ2SDUyLjA2MDNWNjQuOTM1Mkw2MC43MzE1IDEwMy45NDZINzAuODYyN0w3OS40MTE1IDY0LjkzNTJWMTAzLjk0NkgxMTYuMTUzTDExOC4zNzUgOTEuNDk3M0gxMzMuMTY3TDEzNS4zODkgMTAzLjk0NkwxNzEuNDY0IDEwMy45NjRIMTcxLjQ5MVYxMDMuOTQ2SDE3MS41MzZWNzcuNjc3OUwxNzUuOTUzIDc3LjE4NDRMMTg1LjEwOCAxMDMuOTY0SDIwMy43NjlMMjAzLjc2MSAxMDMuOTQ2SDIwMy44MTRMMTkxLjgwMSA3Mi41NjY0QzE5Ny44ODQgNjkuMTA2NSAyMDQuNzYgNjAuMzM1IDIwMi45MyA1MS45NFY1MS45MzcxQzIwMi45NTMgNTIuMDQ2IDIxNC4yNzMgMTA0IDIxNC4yNzMgMTA0TDIzNi40NjIgMTAzLjk0N0wyNTEuNjIzIDMwLjU5MzFWMTAzLjk0N0gyODcuNjAzVjg5LjM5MjZIMjcwLjUyOFY3MC44MzQzSDI4Ny42MDNWNTYuMDU3OEgyNzAuNTI4VjM3Ljc3MjdIMjg3LjYwNFpNMTIwLjYyIDc4LjY2NjRMMTI1Ljg1NyA0NC4wNjE2TDEzMS4yODQgNzguNjY2NEgxMjAuNjJaTTE3Ni4wMTQgNjIuNjg3NEMxNzQuNTUxIDYzLjIyODcgMTczLjAyNyA2My40OTk1IDE3MS41MzYgNjMuNTAyNFYzNy40NzI0QzE3MS41NTkgMzcuNDcyNCAxNzEuNTk0IDM3LjQ2OTUgMTcxLjYzMSAzNy40Njk1QzE3My4xMTcgMzcuNDYwOCAxODQuMjQ3IDM3LjgxMzYgMTg0LjI0NyA1MC4zNDE5QzE4NC4yNDcgNTYuODk1NCAxODAuNDYzIDYxLjAyODYgMTc2LjAxNCA2Mi42ODc0Wk0zMjYgODkuMzc5MlYxMDMuOTI4SDI5MC44OTdWMjNIMzA5LjhWODkuMzc5MkgzMjZaIiBmaWxsPSIjRkJGM0YzIi8+CjxyZWN0IHg9IjEuNSIgeT0iMS41IiB3aWR0aD0iMzU2IiBoZWlnaHQ9IjEyMyIgcng9IjExLjUiIHN0cm9rZT0iIzhDNDg0OCIgc3Ryb2tlLW9wYWNpdHk9IjAuMjYiIHN0cm9rZS13aWR0aD0iMyIvPgo8L3N2Zz4K"/>
	  <menu>
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