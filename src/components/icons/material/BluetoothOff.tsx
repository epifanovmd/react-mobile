import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BluetoothOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 5.83L14.88 7.71L13.28 9.31L14.69 10.72L17.71 7.7L12 2H11V7.03L13 9.03V5.83ZM5.41 4L4 5.41L10.59 12L5 17.59L6.41 19L11 14.41V22H12L16.29 17.71L18.59 20L20 18.59L5.41 4ZM13 18.17V14.41L14.88 16.29" />
    </Svg>
  );
};
