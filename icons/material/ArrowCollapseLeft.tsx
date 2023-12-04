import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ArrowCollapseLeftIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.92 19.92L4 12L11.92 4.08L13.33 5.5L7.83 11H22V13H7.83L13.34 18.5L11.92 19.92ZM4 12V2H2V22H4V12Z" />
    </Svg>
  );
};
