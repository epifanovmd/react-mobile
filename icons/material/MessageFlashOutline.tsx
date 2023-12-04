import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MessageFlashOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 17.2V4H20V10H22V4C22 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V22L6 18H15V16H5.2L4 17.2ZM22.5 16H20.3L22 12H17V18H19V23L22.5 16Z" />
    </Svg>
  );
};
