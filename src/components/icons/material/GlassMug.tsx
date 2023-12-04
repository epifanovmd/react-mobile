import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const GlassMugIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 4V7H18V4H10ZM8 2H20H21V3L20 4V20L21 21V22H20H8H7V21L8 20V18.6L4.2 16.83C3.5 16.5 3 15.82 3 15V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H8V4L7 3V2H8ZM5 15L8 16.39V8H5V15Z" />
    </Svg>
  );
};
