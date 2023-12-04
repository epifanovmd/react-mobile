import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ResizeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10.59 12L14.59 8H11V6H18V13H16V9.41L12 13.41V16H20V4H8V12H10.59ZM22 2V18H12V22H2V12H6V2H22ZM10 14H4V20H10V14Z" />
    </Svg>
  );
};
