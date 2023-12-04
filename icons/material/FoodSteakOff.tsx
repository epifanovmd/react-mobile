import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FoodSteakOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.39011 1.73047L1.11011 3.00047L5.27011 7.16047C5.08011 7.83047 5.00011 8.53047 5.00011 9.26047C5.10011 11.8305 6.59011 14.0505 8.74011 15.1905C10.1001 15.9005 11.0001 17.2505 11.0001 18.7905V19.0005C11.0001 20.6605 12.3401 22.0005 14.0001 22.0005C15.6801 22.0005 16.8301 21.1105 17.6001 19.5005L20.8401 22.7305L22.1101 21.4605L2.39011 1.73047ZM14.0001 20.0005C13.4501 20.0005 13.0001 19.5505 13.0001 19.0005V18.7905C13.0001 16.5605 11.7201 14.5005 9.67011 13.4205C8.09011 12.5805 7.07011 10.9605 7.00011 9.18047C7.00011 9.09047 7.00011 9.00047 7.00011 8.90047L8.16011 10.0505C8.19011 10.1505 8.21011 10.2505 8.24011 10.3505L8.40011 10.2905L9.62011 11.5005L9.08011 11.7105C9.38011 12.0405 9.73011 12.3205 10.1401 12.5305C10.8101 12.8905 11.4001 13.3405 11.9101 13.8505L11.9501 13.8405L13.1701 15.0605L12.9501 15.1405C13.4601 15.9605 13.8001 16.8905 13.9301 17.8505L15.2001 17.3905C15.2201 17.3205 15.2501 17.2405 15.2701 17.1605L16.0701 17.9605C15.4701 19.6805 14.6801 20.0005 14.0001 20.0005ZM15.7901 7.60047L12.1401 8.94047L9.88011 6.68047L13.6901 5.30047C14.9401 5.77047 15.5301 6.72047 15.7901 7.60047ZM8.59011 5.39047L7.17011 3.97047C8.41011 2.77047 10.0701 2.00047 11.8801 2.00047C19.0001 2.00047 19.0001 9.00047 19.0001 9.00047C19.0001 11.4605 18.9001 13.6305 18.6601 15.4605L16.8401 13.6405C16.9401 12.3605 17.0001 10.8305 17.0001 9.00047C17.0001 8.18047 16.6901 4.00047 11.8801 4.00047C10.6701 4.00047 9.50011 4.50047 8.59011 5.39047ZM15.6801 12.5005L13.3601 10.1505L16.0001 9.19047C16.0001 10.4105 15.9701 11.4605 15.9201 12.4005L15.6801 12.5005Z" />
    </Svg>
  );
};