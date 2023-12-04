import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const StarBoxMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 6V20H18V22H3C2.4 22 2 21.6 2 21V6H4ZM8 2H20C21.11 2 22 2.9 22 4V16C22 17.11 21.11 18 20 18H8C6.9 18 6 17.11 6 16V4C6 2.9 6.9 2 8 2ZM16.3 13.3L15.9 10.7L17.8 8.8L15.2 8.4L14 6L12.8 8.4L10.2 8.8L12.1 10.6L11.6 13.2L14 12L16.3 13.3Z" />
    </Svg>
  );
};
