import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FitToPageOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 2H4C2.89 2 2 2.89 2 4V20C2 21.11 2.89 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.89 21.11 2 20 2ZM20 20H4V4H20V20ZM13 8V10H11V8H9L12 5L15 8H13ZM16 15V13H14V11H16V9L19 12L16 15ZM10 13H8V15L5 12L8 9V11H10V13ZM15 16L12 19L9 16H11V14H13V16" />
    </Svg>
  );
};
