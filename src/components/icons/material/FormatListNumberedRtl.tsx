import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatListNumberedRtlIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 13V11H17V13H3ZM3 19V17H17V19H3ZM3 7V5H17V7H3ZM20 8V5H19V4H21V8H20ZM19 17V16H22V20H19V19H21V18.5H20V17.5H21V17H19ZM21.25 10C21.67 10 22 10.34 22 10.75C22 10.95 21.92 11.14 21.79 11.27L20.12 13H22V14H19V13.08L21 11H19V10H21.25Z" />
    </Svg>
  );
};
