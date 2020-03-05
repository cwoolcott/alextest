import React, { Component } from 'react';
import axios from 'axios';
import Container from '../Container';
import SavedBooks from '../SavedBooks';

class Saved extends Component {
    state = {
        booksSaved:''
    }

    componentDidMount() {
        axios.get('/api/books')
            .then(results => {
                this.setState({booksSaved: results.data})
            })
    }

    render() {
        return (
            <div>
                <Container>
                    <SavedBooks
                        results={this.state.booksSaved}
                    />
                </Container>
            </div>
        )
    }
}

export default Saved;