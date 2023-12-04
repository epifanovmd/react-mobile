import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const VectorSquareIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 2H8V4H16V2H22V8H20V16H22V22H16V20H8V22H2V16H4V8H2V2ZM16 8V6H8V8H6V16H8V18H16V16H18V8H16ZM4 4V6H6V4H4ZM18 4V6H20V4H18ZM4 18V20H6V18H4ZM18 18V20H20V18H18Z" />
    </Svg>
  );
};
