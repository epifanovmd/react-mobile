import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WallSconceFlatOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 5V11H19V5H5ZM17 9H7V7H17V9ZM5.27 13.32L3.5 15.09L4.91 16.5L6.68 14.73L5.27 13.32ZM18.73 13.32L17.32 14.73L19.09 16.5L20.5 15.09L18.73 13.32ZM11 16V19H13V16H11Z" />
    </Svg>
  );
};
