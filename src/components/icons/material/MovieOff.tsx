import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MovieOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.1101 21.4605L20.8401 22.7305L18.1101 20.0005H4.00011C2.90011 20.0005 2.00011 19.1105 2.00011 18.0005V6.00047C2.00011 5.42047 2.25011 4.90047 2.65011 4.54047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605ZM21.8801 18.6805C21.9601 18.4705 22.0001 18.2405 22.0001 18.0005V4.00047H18.0001L20.0001 8.00047H17.0001L15.0001 4.00047H13.0001L15.0001 8.00047H12.0001L10.0001 4.00047H8.00011L8.80011 5.60047L21.8801 18.6805Z" />
    </Svg>
  );
};
