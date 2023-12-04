import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const GlassMugOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.0001 19.3505V19.3405L6.66011 6.00047L6.07011 5.41047L2.39011 1.73047L1.11011 3.00047L4.26011 6.15047C3.50011 6.44047 3.00011 7.16047 3.00011 8.00047V15.0005C3.00011 15.8205 3.50011 16.5005 4.20011 16.8305L8.00011 18.6005V20.0005L7.00011 21.0005V22.0005H20.1101L20.8401 22.7305L22.1101 21.4605L20.0001 19.3505ZM8.00011 16.3905L5.00011 15.0005V8.00047H6.11011L8.00011 9.89047V16.3905ZM8.00011 4.00047L7.00011 3.00047V2.00047H21.0001V3.00047L20.0001 4.00047V16.8005L10.2001 7.00047H18.0001V4.00047H10.0001V6.80047L8.00011 4.80047V4.00047Z" />
    </Svg>
  );
};
