import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VectorSquareCloseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 4H6V6H4V4ZM6 20H4V18H6V20ZM18 8V16H16V18H8V16H6V8H8V2H2V8H4V16H2V22H8V20H16V22H22V16H20V8H22V2H16V8H18ZM20 20H18V18H20V20ZM18 6V4H20V6H18ZM14 6H10V4H14V6Z" />
    </Svg>
  );
};
