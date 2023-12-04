import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TestTubeOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 5.27L3.28 4L20 20.72L18.73 22L15.84 19.11C15.36 20.77 13.82 22 12 22C10.9391 22 9.92172 21.5786 9.17157 20.8284C8.42143 20.0783 8 19.0609 8 18V11.27L2 5.27ZM7 2H17V4H16V14.18L13.63 11.81C13.86 11.63 14 11.35 14 11C14 10.4 13.6 10 13 10C12.65 10 12.37 10.14 12.19 10.37L8 6.18V4H7V2ZM11 16C11.5 16 11.88 15.71 12 15.24L10.76 14C10.29 14.12 10 14.5 10 15C10 15.6 10.4 16 11 16ZM14 7V4H10V7H14Z" />
    </Svg>
  );
};
