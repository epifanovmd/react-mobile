import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ForwardburgerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 12.9996H3V10.9996H19L15 6.99961L16.4 5.59961L22.8 11.9996L16.4 18.3996L15 16.9996L19 12.9996ZM3 5.99961H13V7.99961H3V5.99961ZM13 15.9996V17.9996H3V15.9996H13Z" />
    </Svg>
  );
};
