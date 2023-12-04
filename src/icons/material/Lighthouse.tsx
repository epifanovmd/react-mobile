import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LighthouseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M8 10V8H9V4H8V3L12 1L16 3V4H15V8H16V10H14.74L8.44 13.64L9 10H8ZM13 8V4H11V8H13ZM7 23L7.04 22.76L16.15 17.5L16.67 20.88L13 23H7ZM8.05 16.17L15.31 12L15.83 15.37L7.43 20.22L8.05 16.17Z" />
    </Svg>
  );
};