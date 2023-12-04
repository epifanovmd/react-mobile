import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MiddlewareIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 12L19 8V11H14.82C14.4 9.84 13.3 9 12 9C10.7 9 9.6 9.84 9.18 11H5L2 8V16L5 13H9.18C9.6 14.16 10.7 15 12 15C13.3 15 14.4 14.16 14.82 13H19V16L23 12Z" />
    </Svg>
  );
};
