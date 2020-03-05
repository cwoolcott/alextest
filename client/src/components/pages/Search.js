import React, { Component } from 'react';
import SearchForm from '../SearchForm';
import axios from 'axios';
import Container from '../Container';
import BookInfo from '../BookInfo';

class Search extends Component {
    state = {
        result: [],
        search: ""
    };

    searchBooks = () => {
        const searchQuery = this.state.search.trim();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:` + searchQuery)
            .then(res => {
                let searchResults = res.data.items
                this.setState({ 'result': searchResults });
                console.log(this.state.result);
            })
    };


    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };

    render() {
        return (
            <div>
                <Container>
                    <SearchForm
                        searchtype="Title"
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                </Container>
                <Container>
                    <BookInfo
                        search={this.state.search}
                        results={this.state.result}
                    />
                </Container>
            </div>
        )
    }
}

export default Search;