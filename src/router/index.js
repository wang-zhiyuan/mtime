import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import React from 'react'
import Coming from '../components/coming'
import Hot from '../components/hot'
import Movie from '../components/movie'
import News from '../components/news'
import Review from '../components/review'
import Toplist from '../components/toplist'
import Trailer from '../components/trailer'
import Find from '../find'
import Home from '../home'
import Mall from '../mall'
import Ticket from '../ticket'
import App from '../App.js'

var MyRouter = (
	<Router>
		<App>
			<Switch>
				<Route path='/home' render={()=>
				<Home>
					<Switch>				
						<Route path='/home/coming' component={Coming}></Route>
						<Route path='/home/hot' component={Hot}></Route>
					</Switch>
				</Home>}></Route>
				<Route path='/mall' component={Mall}></Route>				
				<Route path='/find' render={()=>
					<Find>
						<Switch>
							<Route path='/find/news' component={News}></Route>
							<Route path='/find/trailer' component={Trailer}></Route>
							<Route path='/find/toplist' component={Toplist}></Route>
							<Route path='/find/review' component={Review}></Route>
						</Switch>
					</Find>
				}></Route>				
				<Route path='/ticket' component={Ticket}></Route>				
			</Switch>
		</App>
	</Router>
)

export default MyRouter







