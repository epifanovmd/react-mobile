import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HamburgerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13C2 11.89 2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13ZM12 3C3 3 3 9 3 9H21C21 9 21 3 12 3ZM3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z" />
    </Svg>
  );
};
