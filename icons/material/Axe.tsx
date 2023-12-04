import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AxeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.0001 2L22.0001 8C22.0001 12 20.0001 14 16.0001 15L13.0001 10L9.00012 6L12.0001 2ZM4.11012 19.84L2.12012 18.33L9.19012 9L11.0001 10.81L4.11012 19.84Z" />
    </Svg>
  );
};
