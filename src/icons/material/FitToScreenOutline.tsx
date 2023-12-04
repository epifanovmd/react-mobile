import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FitToScreenOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17 4H20C21.1 4 22 4.9 22 6V8H20V6H17V4ZM4 8V6H7V4H4C2.9 4 2 4.9 2 6V8H4ZM20 16V18H17V20H20C21.1 20 22 19.1 22 18V16H20ZM7 18H4V16H2V18C2 19.1 2.9 20 4 20H7V18ZM16 10V14H8V10H16ZM18 8H6V16H18V8Z" />
    </Svg>
  );
};
