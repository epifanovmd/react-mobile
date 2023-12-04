import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SilverwareSpoonIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.88 11.5307L5.11996 21.2907L3.70996 19.8807L13.47 10.1207C12.76 8.59071 13.26 6.44071 14.85 4.85071C16.76 2.93071 19.5 2.57072 20.96 4.03072C22.43 5.50072 22.07 8.24071 20.15 10.1507C18.56 11.7407 16.41 12.2407 14.88 11.5307Z" />
    </Svg>
  );
};
