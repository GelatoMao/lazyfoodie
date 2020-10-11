import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Admin from './admin'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Search from './pages/search'
import NoMatch from './pages/nomatch'
import Collections from './pages/Collections'
import Quick from './pages/Ordinary/quick'
import Meal from './pages/Ordinary/meal'
import Breakfast from './pages/breakfast'
import Pock from './pages/Meat/pock'
import Chicken from './pages/Meat/chicken'
import Duck from './pages/Meat/duck'
import Beef from './pages/Meat/beef'
import Mutton from './pages/Meat/mutton'
import Fish from './pages/fish'
import Fruits from './pages/Vegetables/fruits'
import Roots from './pages/Vegetables/roots'
import Mushrooms from './pages/Vegetables/mushrooms'
import Leaves from './pages/Vegetables/leaves'
import Soup from './pages/soup'
import Bake from './pages/bake'
import Staple from './pages/staple'
import Noodles from './pages/noodles'
import Vegetarian from './pages/vegetarian'
import './reset.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* 将admin框架作用在每个页面上 */}
        <Admin>
          <Switch>
            <Route path="/common" render={() => (
              <Route path="/common/detail/:id" component={Detail} />
            )} />
            <Route path="/search" component={Search} />
            <Route path="/collections" component={Collections} />
            <Route path="/topic" component={NoMatch} />
            <Route path="/menu" component={NoMatch} />
            <Route path="/tags" component={NoMatch} />
            <Route path="/" render={() => (
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/ordinary/quick" component={Quick} />
                <Route path="/ordinary/meal" component={Meal} />
                <Route path="/breakfast" component={Breakfast} />
                <Route path="/meat/pock" component={Pock} />
                <Route path="/meat/chicken" component={Chicken} />
                <Route path="/meat/duck" component={Duck} />
                <Route path="/meat/beef" component={Beef} />
                <Route path="/meat/mutton" component={Mutton} />
                <Route path="/fish" component={Fish} />
                <Route path="/vegetables/fruits" component={Fruits} />
                <Route path="/vegetables/roots" component={Roots} />
                <Route path="/vegetables/mushrooms" component={Mushrooms} />
                <Route path="/vegetables/leaves" component={Leaves} />
                <Route path="/soup" component={Soup} />
                <Route path="/bake" component={Bake} />
                <Route path="/staple" component={Staple} />
                <Route path="/noodles" component={Noodles} />
                <Route path="/vegetarian" component={Vegetarian} />
                <Redirect to="/home" />
              </Switch>
            )} />
          </Switch>
        </Admin>
      </Router>
    )
  }
}
