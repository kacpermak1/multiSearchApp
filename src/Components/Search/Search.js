import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ImageResults from '../ImageResults/ImageResults';

class Search extends Component {

    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '15164621-e9e63a50c846d79421bd72c77',
        images: [],
        error: false,
        isLoading: true
    }

    componentDidMount() {

        const randomWords = require('random-words')
        fetch(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${randomWords(1)[0]}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ images: data.hits, isLoading: false }))
            .catch(error => this.setState({ error: true, isLoading: false }));
    }

    onTextChange = (e) => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
            if (val === '') { this.setState({ images: [] }) } else {
                fetch(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error('Something went wrong ...');
                        }
                    })
                    .then(data => this.setState({ images: data.hits, isLoading: false }))
                    .catch(error => this.setState({ error: true, isLoading: false }));
            }
        }
        )
    }

    onAmountChange = (e, index, val) => {
        this.setState({ amount: val }, () => {
            if (this.state.searchText) {
                fetch(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error('Something went wrong ...');
                        }
                    })
                    .then(data => this.setState({ images: data.hits, isLoading: false }))
                    .catch(error => this.setState({ error: true, isLoading: false }))
            }
        })

    }

    render() {

        return (
            <div className="container">
                <TextField name="searchText" value={this.state.searchText} onChange={this.onTextChange} floatingLabelText="search for images" fullWidth={true} />
                <br />
                <SelectField name="amount" floatingLabelText="Amount" value={this.state.amount} onChange={this.onAmountChange}>
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={20} primaryText="20" />
                    <MenuItem value={25} primaryText="25" />
                </SelectField>
                <br />
                {this.state.images.length > 0 ? <ImageResults images={this.state.images} /> : null}
            </div>
        )
    }
}

export default Search;