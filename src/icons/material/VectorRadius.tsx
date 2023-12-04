import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VectorRadiusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 4H4V2H10V4C12.6522 4 15.1957 5.05357 17.0711 6.92893C18.9464 8.8043 20 11.3478 20 14H22V20H20V22H18V20H16V14H18C18 11.8783 17.1571 9.84344 15.6569 8.34315C14.1566 6.84285 12.1217 6 10 6V8H4V6H2V4ZM18 16V18H20V16H18ZM6 4V6H8V4H6Z" />
    </Svg>
  );
};
