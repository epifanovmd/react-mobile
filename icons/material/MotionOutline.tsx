import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MotionOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 13H3C2.45 13 2 12.55 2 12C2 11.45 2.45 11 3 11H7C7.55 11 8 11.45 8 12C8 12.55 7.55 13 7 13ZM6 8C6 7.45 5.55 7 5 7H4C3.45 7 3 7.45 3 8C3 8.55 3.45 9 4 9H5C5.55 9 6 8.55 6 8ZM22 12C22 14.76 19.76 17 17 17H4C3.45 17 3 16.55 3 16C3 15.45 3.45 15 4 15H13C12.58 14.42 12.25 13.74 12.1 13H10C9.45 13 9 12.55 9 12C9 11.45 9.45 11 10 11H12.1C12.25 10.26 12.58 9.58 13 9H8C7.45 9 7 8.55 7 8C7 7.45 7.45 7 8 7H17C19.76 7 22 9.24 22 12ZM20 12C20 10.35 18.65 9 17 9C15.35 9 14 10.35 14 12C14 13.65 15.35 15 17 15C18.65 15 20 13.65 20 12Z" />
    </Svg>
  );
};
