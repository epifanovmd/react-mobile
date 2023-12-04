import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AnvilIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9 5V10C13.03 12.47 8.44 14.97 6 16V19H21V16C14.59 13.27 17.47 9 22 8V5H9ZM2 6C2.81 8.13 4.42 9.5 7 10V6H2Z" />
    </Svg>
  );
};
