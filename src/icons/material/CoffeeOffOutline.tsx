import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CoffeeOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 3.27L4 5.27V13C4 15.21 5.79 17 8 17H14C14.5 17 15 16.89 15.44 16.71L17.73 19H2V21H19.73L20.72 22L22 20.72L3.27 2L2 3.27ZM8 15C6.9 15 6 14.1 6 13V7.27L13.73 15H8ZM20 3H6.81L8.81 5H16V12.19L17.85 14.04C17.94 13.7 18 13.36 18 13V10H20C21.1 10 22 9.1 22 8V5C22 3.9 21.1 3 20 3ZM20 8H18V5H20V8Z" />
    </Svg>
  );
};
