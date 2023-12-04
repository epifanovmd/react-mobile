import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CarCoolantLevelIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 7V5H21V3H13V5H15V7H1V21H23V7H19ZM21 14.42C20.71 14.13 20.5 14 20 14C19.33 14 19.21 14.21 18.71 14.71C18.21 15.21 17.33 16 16 16C14.67 16 13.79 15.21 13.29 14.71C12.79 14.21 12.67 14 12 14C11.78 14 11.63 14.03 11.5 14.08C11.22 14.18 11.05 14.37 10.71 14.71C10.21 15.21 9.33 16 8 16C6.67 16 5.79 15.21 5.29 14.71C4.79 14.21 4.67 14 4 14C3.5 14 3.29 14.13 3 14.42V9H21V14.42Z" />
    </Svg>
  );
};
