import { Component } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { fetchImage } from './services/fetchImage';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: '1',
    images: null,
    totalHits: null,

    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    const prevPage = prevState.page;
    const prevQuery = prevState.query;

    if (prevPage !== page || prevQuery !== query) {
      this.createImageGallery(query, page);
    }
  }

  createImageGallery = async (query, page) => {
    try {
      this.setState({ isLoading: true });

      const { hits, totalHits } = await fetchImage(query, page);

      if (hits.length === 0) {
        toast.error(`Sorry, failed to load your search: ${query}.`);
      }

      this.setState(({ images }) => ({
        images: [...images, ...hits],
        totalHits: totalHits,
      }));
    } catch (error) {
      const toastError = toast.error(`Sorry, something went wrong. Try later`);
      this.setState({ error: toastError });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFormSubmit = query => {
    this.setState({
      query,
      page: 1,
      images: [],
    });
  };

  getNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, totalHits, isLoading } = this.state;

    return (
      <>
        <Searchbar onQuerySubmit={this.handleFormSubmit} />

        {isLoading && <Loader />}

        {images && <ImageGallery images={images} />}

        {!isLoading && images && images.length < totalHits && (
          <Button getMoreImage={this.getNextPage} />
        )}

        <Toaster position="top-right" />
      </>
    );
  }
}
