import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicroscopeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9.46 6.28031L11.05 9.00031C8.47 9.26031 6.5 11.4103 6.5 14.0003C6.5 15.3264 7.02678 16.5982 7.96447 17.5358C8.90215 18.4735 10.1739 19.0003 11.5 19.0003C13.55 19.0003 15.31 17.7703 16.08 16.0003H13.5V14.0003H21.5V16.0003H19.25C18.84 17.5703 17.97 18.9603 16.79 20.0003H19.5V22.0003H3.5V20.0003H6.21C4.55 18.5303 3.5 16.3903 3.5 14.0003C3.5 10.3703 5.96 7.20031 9.46 6.28031ZM12.74 2.07031L13.5 3.37031L14.36 2.87031L17.86 8.93031L14.39 10.9303L10.89 4.87031L11.76 4.37031L11 3.07031L12.74 2.07031Z" />
    </Svg>
  );
};
