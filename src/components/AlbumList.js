import React from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
  state = {
    albums: []
  }

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(({ data }) => this.setState({ albums: data }));
  }

  renderAlbums = () => {
    const { albums } = this.state;

    return albums.map(album => {
      const { title } = album;

      return (
        <AlbumDetail key={title} album={album} />
      );
    });
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
};

export default AlbumList;
