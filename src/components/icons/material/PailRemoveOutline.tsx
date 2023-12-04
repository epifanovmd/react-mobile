import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PailRemoveOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3.99999 6H2.99999V4H21V6H20L18.6 13C17.83 13.07 17.11 13.26 16.45 13.58L17.96 6H6.03999L6.49999 8.22L4.64999 9.27L3.99999 6ZM12.86 8C12.58 7.5 11.97 7.35 11.5 7.63L3.26999 12.38C2.78999 12.66 2.61999 13.27 2.89999 13.75C3.17999 14.23 3.78999 14.39 4.26999 14.11L12.5 9.36C12.97 9.09 13.14 8.47 12.86 8ZM13 19H8.63999L7.72999 14.43L5.89999 15.5L6.99999 21H13.35C13.13 20.37 13 19.7 13 19ZM21.12 15.46L19 17.59L16.88 15.46L15.46 16.88L17.58 19L15.46 21.12L16.87 22.54L19 20.41L21.12 22.54L22.53 21.12L20.41 19L22.53 16.88L21.12 15.46Z" />
    </Svg>
  );
};
