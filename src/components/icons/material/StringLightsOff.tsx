import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const StringLightsOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.0001 10.7405V8.96047C14.9501 8.90047 15.8601 8.81047 16.7401 8.67047L17.1601 10.3905C16.6701 11.1205 16.5401 12.0005 16.7301 12.8205C16.8201 13.1705 16.9101 13.5005 17.0001 13.8005L21.1201 17.9205C23.6101 17.2605 23.0901 13.5505 22.5601 11.3905C22.3601 10.5905 21.8201 9.85047 21.0501 9.44047L20.6301 7.74047C21.1101 7.58047 21.5701 7.41047 22.0001 7.23047V5.00047C20.0001 6.07047 16.5301 7.03047 12.0001 7.03047C11.3701 7.03047 10.7601 7.00047 10.1701 6.97047L14.0001 10.7405ZM20.7201 16.5005C19.2701 16.8405 18.1901 12.4705 18.1901 12.4705C18.1901 12.4705 17.8301 11.0005 19.2901 10.6505C20.7501 10.3005 21.1001 11.7505 21.1001 11.7505C21.1001 11.7505 22.1801 16.1205 20.7201 16.5005ZM14.9501 14.2905L13.5001 12.8305L12.1801 11.5005L10.0001 9.34047L9.58007 8.93047H9.59007L7.32007 6.66047L2.39007 1.73047L1.11007 3.00047L3.91007 5.80047C3.19007 5.55047 2.53007 5.28047 2.00007 5.00047V7.23047C2.43007 7.41047 2.89007 7.58047 3.37007 7.74047L2.95007 9.44047C2.18007 9.85047 1.64007 10.5905 1.44007 11.3905C0.90507 13.5705 0.38507 17.3105 2.92007 17.9305C4.00007 18.2005 6.00007 17.8905 7.27007 12.8205C7.46007 12.0005 7.33007 11.1205 6.84007 10.3905L7.17007 9.06047L9.50007 11.3805C9.18007 11.8705 9.00007 12.4405 9.00007 13.0005C9.00007 15.2405 9.39007 19.0005 12.0001 19.0005C12.8001 19.0005 13.9701 18.5905 14.5901 16.5005L20.8401 22.7305L22.1101 21.4605L14.9501 14.3005V14.2905ZM5.81007 12.4705C5.81007 12.4705 4.74007 16.8405 3.28007 16.5005C1.82007 16.1205 2.90007 11.7505 2.90007 11.7505C2.90007 11.7505 3.26007 10.2905 4.71007 10.6505C6.16007 11.0105 5.81007 12.4705 5.81007 12.4705ZM12.0001 17.5005C10.5001 17.5005 10.5001 13.0005 10.5001 13.0005C10.5001 13.0005 10.5001 12.7705 10.6001 12.5005L13.3201 15.2105C13.1301 16.3505 12.7601 17.5005 12.0001 17.5005Z" />
    </Svg>
  );
};
