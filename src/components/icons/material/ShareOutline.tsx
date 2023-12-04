import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ShareOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 5V9C7 10 4 15 3 20C5.5 16.5 9 14.9 14 14.9V19L21 12L14 5ZM16 9.83L18.17 12L16 14.17V12.9H14C11.93 12.9 10.07 13.28 8.34 13.85C9.74 12.46 11.54 11.37 14.28 11L16 10.73V9.83Z" />
    </Svg>
  );
};
