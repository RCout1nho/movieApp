import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 122px;
  height: 182px;
  background-color: #c4c4c4;
  border-radius: 8px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const PosterImage = styled.Image`
  width: 122px;
  height: 100%;
  border-radius: 8px;
`;
