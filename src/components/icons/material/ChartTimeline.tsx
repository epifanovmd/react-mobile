import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ChartTimelineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 2H4V20H22V22H2V2ZM7 10H17V13H7V10ZM11 15H21V18H11V15ZM6 4H22V8H20V6H8V8H6V4Z" />
    </Svg>
  );
};
