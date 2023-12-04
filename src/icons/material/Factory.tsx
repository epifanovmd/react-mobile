import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FactoryIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 18V20H8V18H4ZM4 14V16H14V14H4ZM10 18V20H14V18H10ZM16 14V16H20V14H16ZM16 18V20H20V18H16ZM2 22V8L7 12V8L12 12V8L17 12L18 2H21L22 12V22H2Z" />
    </Svg>
  );
};
