import React from 'react';
import unsplash from './api/unsplash'; //for request api
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (textSearch) => {
    // console.log(textSearch);
    const response = await unsplash.get(`/search/photos`, {
      params: {
        query: textSearch,
      },
    });

    this.setState({
      images: response.data.results,
    });
    console.log(this.state.images);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <h2>Total count images: {this.state.images.length}</h2>
        <h2>
          <ImageList images={this.state.images} />
        </h2>
      </div>
    );
  }
}

export default App;
