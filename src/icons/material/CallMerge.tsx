import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CallMergeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 20.41L18.41 19L15 15.59L13.59 17L17 20.41ZM7.49997 8H11V13.59L5.58997 19L6.99997 20.41L13 14.41V8H16.5L12 3.5" />
    </Svg>
  );
};
