import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SpiritLevelIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22 8H2V16H22V8ZM18 14V10H20V14H18ZM11 12H13C14.1 12 15 11.11 15 10H17V14H7V10H9C9 11.11 9.9 12 11 12ZM4 14V10H6V14H4Z" />
    </Svg>
  );
};
