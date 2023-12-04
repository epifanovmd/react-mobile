import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FormatTextRotationDownVerticalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.25 4H13.75L9 15H11.1L12 12.8H17L17.9 15H20L15.25 4ZM12.63 11L14.5 6L16.37 11H12.63ZM5 17.5L8 14.5H6V2H4V14.5H2L5 17.5ZM22 20L19 17V19H6.5V21H19V23L22 20Z" />
    </Svg>
  );
};
