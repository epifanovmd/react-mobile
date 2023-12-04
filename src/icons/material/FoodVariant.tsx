import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FoodVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22 18C22 19.0609 21.5786 20.0783 20.8284 20.8284C20.0783 21.5786 19.0609 22 18 22H15C13.9391 22 12.9217 21.5786 12.1716 20.8284C11.4214 20.0783 11 19.0609 11 18V16H17.79L20.55 11.23L22.11 12.13L19.87 16H22V18ZM9 22H2C2 19 2 16 2.33 12.83C2.6 10.3 3.08 7.66 3.6 5H3V3H4H7H8V5H7.4C7.92 7.66 8.4 10.3 8.67 12.83C9 16 9 19 9 22Z" />
    </Svg>
  );
};
