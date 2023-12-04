import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SecurityIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 12H19C18.47 16.11 15.72 19.78 12 20.92V12H5V6.3L12 3.19V12ZM12 1L3 5V11C3 16.55 6.84 21.73 12 23C17.16 21.73 21 16.55 21 11V5L12 1Z" />
    </Svg>
  );
};
