import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchImage: '',
  };

  handleFormSubmit = searchImage => {
    this.setState({ searchImage });
  };

  render() {
    const { searchImage } = this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchImage={searchImage} />
      </div>
    );
  }
}

export default App;