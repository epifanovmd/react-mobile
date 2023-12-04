import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CeilingLightOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.76 11L16.76 15H7.24L9.24 11H14.76ZM13 4H11V9H8L4 17H20L16 9H13V4ZM14 18H10C10 19.11 10.9 20 12 20C13.1 20 14 19.11 14 18Z" />
    </Svg>
  );
};