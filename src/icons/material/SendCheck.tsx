import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SendCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 3V10L17 12L2 14V21L23 12L2 3ZM22 15.5L18.5 19L16.5 17L15 18.5L18.5 22L23.5 17L22 15.5Z" />
    </Svg>
  );
};
