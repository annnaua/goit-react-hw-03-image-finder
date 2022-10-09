import PropTypes from 'prop-types';
import { Component } from 'react';
import toast from 'react-hot-toast';

import {
  SearchBar,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleQuerySubmit = e => {
    const { query } = this.state;

    e.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter search query!');
      return;
    }

    this.props.onQuerySubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleQuerySubmit}>
          <SearchFormButton type="submit">Search</SearchFormButton>

          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}

Searchbar.propTypes = {
  onQuerySubmit: PropTypes.func.isRequired,
};
