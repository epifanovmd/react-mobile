import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MovieOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.39011 1.73047L1.11011 3.00047L2.65011 4.54047C2.25011 4.90047 2.00011 5.42047 2.00011 6.00047V18.0005C2.00011 19.1105 2.90011 20.0005 4.00011 20.0005H18.1101L20.8401 22.7305L22.1101 21.4605L2.39011 1.73047ZM4.00011 18.0005V6.47047L5.76011 10.0005H8.11011L16.1101 18.0005H4.00011ZM8.80011 5.60047L8.00011 4.00047H10.0001L12.0001 8.00047H15.0001L13.0001 4.00047H15.0001L17.0001 8.00047H20.0001L18.0001 4.00047H22.0001V18.0005C22.0001 18.2405 21.9601 18.4705 21.8801 18.6805L20.0001 16.8005V10.0005H13.2001L8.80011 5.60047Z" />
    </Svg>
  );
};
