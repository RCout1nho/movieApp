import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { IMovie } from './index';

export const Container = styled.View`
  flex: 1;
  background-color: #252c39;
  padding: 10px 0 10px 20px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
`;

export const PageTitleContainer = styled.View`
  flex-direction: row;
`;
export const SpolightText = styled.Text`
  font-weight: bold;
  font-size: 26px;
  color: #e9042f;
`;
export const TitleText = styled.Text`
  font-size: 26px;
  color: #fff;
`;

export const CategoryContainer = styled.View`
  margin: 10px 0;
`;

export const CategoryTitle = styled.Text`
  font-size: 22px;
  color: #8e8e8f;
`;

export const CategoryListContainer = styled.View`
  height: 182px;
  margin-top: 12px;
`;

export const MoviesList = styled(FlatList as new () => FlatList<IMovie>)``;
