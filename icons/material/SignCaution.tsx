import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SignCautionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 3H22V13H18V21H16V13H8V21H6V13H2V3ZM18.97 11L20 9.97V7.15L16.15 11H18.97ZM13.32 11L19.32 5H16.5L10.5 11H13.32ZM7.66 11L13.66 5H10.83L4.83 11H7.66ZM5.18 5L4 6.18V9L8 5H5.18Z" />
    </Svg>
  );
};
