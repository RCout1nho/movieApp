import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

import api from '../../services/api';
import Poster from '../../components/Poster';

import Logo from '../../assets/Logo-Horizontal.png';

import {
  Container,
  LogoContainer,
  PageTitleContainer,
  SpolightText,
  TitleText,
  CategoryContainer,
  CategoryTitle,
  CategoryListContainer,
  MoviesList,
} from './styles';

export interface IMovie {
  original_name: string;
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    (async () => {
      const responseMovies = await api.get('trending/movie/week');
      setMovies(responseMovies.data.results);
    })();
  }, []);

  return (
    <Container>
      <LogoContainer>
        <Image source={Logo} />
      </LogoContainer>

      <PageTitleContainer>
        <SpolightText>Tendências</SpolightText>
        <TitleText> do dia</TitleText>
      </PageTitleContainer>

      <CategoryContainer>
        <CategoryTitle>Filmes em alta</CategoryTitle>
        <CategoryListContainer>
          <MoviesList
            horizontal
            data={movies}
            keyExtractor={(movie) => movie.id.toString()}
            renderItem={({ item }) => (
              <Poster title={item.title} image_path={item.poster_path} />
            )}
          />
        </CategoryListContainer>
      </CategoryContainer>
    </Container>
  );
};

export default Home;
