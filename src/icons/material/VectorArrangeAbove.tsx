import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VectorArrangeAboveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 1C1.89 1 1 1.89 1 3V14C1 15.11 1.89 16 3 16C6.67 16 10.33 16 14 16C15.11 16 16 15.11 16 14C16 10.33 16 6.67 16 3C16 1.89 15.11 1 14 1H3ZM3 3H14V14H3V3ZM18 7V9H20V20H9V18H7V20C7 21.11 7.89 22 9 22H20C21.11 22 22 21.11 22 20V9C22 7.89 21.11 7 20 7H18Z" />
    </Svg>
  );
};