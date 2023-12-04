import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BookMinusMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13.09 20H5V6H3V20C3 21.11 3.9 22 5 22H13.81C13.44 21.39 13.2 20.71 13.09 20ZM19 2H14V7L12 5.5L10 7V2H9C7.9 2 7 2.9 7 4V16C7 17.11 7.9 18 9 18H13.09C13.64 14.73 16.74 12.53 20 13.08C20.34 13.14 20.68 13.23 21 13.34V4C21 2.9 20.11 2 19 2ZM23 18V20H15V18H23Z" />
    </Svg>
  );
};
