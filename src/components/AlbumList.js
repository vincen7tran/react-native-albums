import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

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
        <Text key={title}>{title}</Text>
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
