import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AnimationIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 2C2.89 2 2 2.89 2 4V14H4V4H14V2H4ZM8 6C6.89 6 6 6.89 6 8V18H8V8H18V6H8ZM12 10C10.89 10 10 10.89 10 12V20C10 21.11 10.89 22 12 22H20C21.11 22 22 21.11 22 20V12C22 10.89 21.11 10 20 10H12Z" />
    </Svg>
  );
};
