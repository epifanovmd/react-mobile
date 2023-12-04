import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NetflixIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6.5 2H10.5L13.44 10.83L13.5 2H17.5V22C16.25 21.78 14.87 21.64 13.41 21.58L10.5 13L10.43 21.59C9.03 21.65 7.7 21.79 6.5 22V2Z" />
    </Svg>
  );
};
