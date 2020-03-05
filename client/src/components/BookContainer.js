import React, { Component } from 'react';
import Saved from './pages/Saved'
import Search from './pages/Search'
import Navbar from './Navbar';
import Container from './Container';
import Header from './Header';
import Home from './pages/Home'
import { Route, BrowserRouter as Router } from 'react-router-dom';


export default class BookContainer extends Component {
    state = {
        currentPage: 'Search'
    };

    // handlePageChange = page => {
    //     this.setState({ currentPage: page })
    //     console.log(this.state.currentPage)
    // }

    // renderpage = page => {
    //     if (this.state.currentPage === 'Saved') {
    //         return <Saved />;
    //     }
    //     else if (this.state.currentPage === 'Search') {
    //         return <Search />
    //     }
    // }

    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Container>
                        <Header />
                    </Container>
                </div>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/saved" component={Saved} />
            </Router>
        )
    }
}