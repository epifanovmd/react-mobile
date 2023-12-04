import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VectorPolygonVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22 8V2H16V5.8L14.4 8H9.6L8 5.8V2H2V8H4V16H2V22H8V20H16V22H22V16H20V8H22ZM11 10H13V12H11V10ZM4 4H6V6H4V4ZM6 20H4V18H6V20ZM16 18H8V16H6V8H7.1L9 10.6V14H15V10.6L16.9 8H18V16H16V18ZM20 20H18V18H20V20ZM18 6V4H20V6H18Z" />
    </Svg>
  );
};
