import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HighwayIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 2L8 8H11V2H10ZM13 2V8H16L14 2H13ZM2 9V10H4V11H6V10H18L18.06 11H20V10H22V9H2ZM7 11L3.34 22H11V11H7ZM13 11V22H20.66L17 11H13Z" />
    </Svg>
  );
};
