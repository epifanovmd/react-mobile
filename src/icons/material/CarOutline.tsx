import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.9 6C18.7 5.4 18.1 5 17.5 5H6.5C5.8 5 5.3 5.4 5.1 6L3 12V20C3 20.5 3.5 21 4 21H5C5.6 21 6 20.5 6 20V19H18V20C18 20.5 18.5 21 19 21H20C20.5 21 21 20.5 21 20V12L18.9 6ZM6.8 7H17.1L18.2 10H5.8L6.8 7ZM19 17H5V12H19V17ZM7.5 13C8.3 13 9 13.7 9 14.5C9 15.3 8.3 16 7.5 16C6.7 16 6 15.3 6 14.5C6 13.7 6.7 13 7.5 13ZM16.5 13C17.3 13 18 13.7 18 14.5C18 15.3 17.3 16 16.5 16C15.7 16 15 15.3 15 14.5C15 13.7 15.7 13 16.5 13Z" />
    </Svg>
  );
};
