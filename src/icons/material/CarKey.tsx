import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarKeyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 0C7.3 0 6 1.3 6 3C6 4.7 7.3 6 9 6C10.3 6 11.4 5.2 11.8 4H14V6H16V4H18V2H11.8C11.4 0.8 10.3 0 9 0ZM9 2C9.6 2 10 2.4 10 3C10 3.6 9.6 4 9 4C8.4 4 8 3.6 8 3C8 2.4 8.4 2 9 2ZM6.5 8C5.8 8 5.3 8.4 5.1 9L3 15V23C3 23.6 3.4 24 4 24H5C5.6 24 6 23.6 6 23V22H18V23C18 23.6 18.4 24 19 24H20C20.6 24 21 23.6 21 23V15L18.9 9C18.7 8.4 18.1 8 17.5 8H6.5ZM6.5 9.5H17.5L19 14H5L6.5 9.5ZM6.5 16C7.3 16 8 16.7 8 17.5C8 18.3 7.3 19 6.5 19C5.7 19 5 18.3 5 17.5C5 16.7 5.7 16 6.5 16ZM17.5 16C18.3 16 19 16.7 19 17.5C19 18.3 18.3 19 17.5 19C16.7 19 16 18.3 16 17.5C16 16.7 16.7 16 17.5 16Z" />
    </Svg>
  );
};
