import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ChartScatterPlotHexbinIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 2H4V20H22V22H2V2ZM14 14.5L12 18H7.94L5.92 14.5L7.94 11H12L14 14.5ZM14.08 6.5L12.06 10H8L6 6.5L8 3H12.06L14.08 6.5ZM21.25 10.5L19.23 14H15.19L13.17 10.5L15.19 7H19.23L21.25 10.5Z" />
    </Svg>
  );
};
