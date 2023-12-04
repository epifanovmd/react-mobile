import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ArrowExpandIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 21V19H6.41L10.91 14.5L9.5 13.09L5 17.59V14H3V21H10ZM14.5 10.91L19 6.41V10H21V3H14V5H17.59L13.09 9.5L14.5 10.91Z" />
    </Svg>
  );
};
