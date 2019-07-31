import React from 'react';
import { Image, View, Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, image } = album;
  const { headerContentStyle, imageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Image style={imageStyle} source={{ uri: image }} />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  imageStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;