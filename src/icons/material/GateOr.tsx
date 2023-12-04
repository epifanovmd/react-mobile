import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GateOrIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 4C5 10 5 14 2 20H8C13 20 19 16 22 12C19 8 13 4 8 4H2ZM5 6H8C11.5 6 16.3 9 19.3 12C16.3 15 11.5 18 8 18H5C6.4 13.9 6.4 10.1 5 6Z" />
    </Svg>
  );
};
