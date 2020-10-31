import React from 'react';
import { Text } from 'react-native';
import showToast from '../../utils/showToast';

import { Container, PosterImage } from './styles';

interface IProps {
  image_path?: string;
  title: string;
}

const Poster: React.FC<IProps> = ({ title, image_path }) => {
  return (
    <Container
      delayLongPress={325}
      onLongPress={() => {
        showToast(title);
      }}
    >
      {image_path ? (
        <PosterImage
          source={{ uri: `https://image.tmdb.org/t/p/w500${image_path}` }}
        />
      ) : (
        <Text>Sem poster</Text>
      )}
    </Container>
  );
};

export default Poster;
