import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WeatherWindyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 10C3.73478 10 3.48043 9.89464 3.29289 9.70711C3.10536 9.51957 3 9.26522 3 9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H12C12.5304 8 13.0391 7.78929 13.4142 7.41421C13.7893 7.03914 14 6.53043 14 6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4C11.45 4 10.95 4.22 10.59 4.59C10.2 5 9.56 5 9.17 4.59C8.78 4.2 8.78 3.56 9.17 3.17C9.9 2.45 10.9 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10H4ZM19 12C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10C18.72 10 18.47 10.11 18.29 10.29C17.9 10.68 17.27 10.68 16.88 10.29C16.5 9.9 16.5 9.27 16.88 8.88C17.42 8.34 18.17 8 19 8C19.7956 8 20.5587 8.31607 21.1213 8.87868C21.6839 9.44129 22 10.2044 22 11C22 11.7956 21.6839 12.5587 21.1213 13.1213C20.5587 13.6839 19.7956 14 19 14H5C4.73478 14 4.48043 13.8946 4.29289 13.7071C4.10536 13.5196 4 13.2652 4 13C4 12.7348 4.10536 12.4804 4.29289 12.2929C4.48043 12.1054 4.73478 12 5 12H19ZM18 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17C3 16.7348 3.10536 16.4804 3.29289 16.2929C3.48043 16.1054 3.73478 16 4 16H18C18.7956 16 19.5587 16.3161 20.1213 16.8787C20.6839 17.4413 21 18.2044 21 19C21 19.7956 20.6839 20.5587 20.1213 21.1213C19.5587 21.6839 18.7956 22 18 22C17.17 22 16.42 21.66 15.88 21.12C15.5 20.73 15.5 20.1 15.88 19.71C16.27 19.32 16.9 19.32 17.29 19.71C17.47 19.89 17.72 20 18 20C18.2652 20 18.5196 19.8946 18.7071 19.7071C18.8946 19.5196 19 19.2652 19 19C19 18.7348 18.8946 18.4804 18.7071 18.2929C18.5196 18.1054 18.2652 18 18 18Z" />
    </Svg>
  );
};
