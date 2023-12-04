import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VectorRectangleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 4H8V6H16V4H22V10H20V14H22V20H16V18H8V20H2V14H4V10H2V4ZM16 10V8H8V10H6V14H8V16H16V14H18V10H16ZM4 6V8H6V6H4ZM18 6V8H20V6H18ZM4 16V18H6V16H4ZM18 16V18H20V16H18Z" />
    </Svg>
  );
};
