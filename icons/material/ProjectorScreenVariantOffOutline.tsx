import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ProjectorScreenVariantOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.11 21.4605L2.38999 1.73047L1.10999 3.00047L4.10999 6.00047H3.99999C3.44999 6.00047 2.99999 6.45047 2.99999 7.00047V8.00047C2.99999 8.55047 3.44999 9.00047 3.99999 9.00047H4.99999V18.0005H16.11L20.84 22.7305L22.11 21.4605ZM6.99999 16.0005V9.00047H7.10999L14.11 16.0005H6.99999ZM12.2 9.00047L9.19999 6.00047H20C20.55 6.00047 21 6.45047 21 7.00047V8.00047C21 8.55047 20.55 9.00047 20 9.00047H19V15.8005L17 13.8005V9.00047H12.2Z" />
    </Svg>
  );
};
