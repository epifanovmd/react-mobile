import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FootballAustralianIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7.5 7.50036C9.17 5.87036 11.29 4.69036 13.37 4.18036C18 3.00036 21 6.00036 19.82 10.6304C19.31 12.7104 18.13 14.8304 16.5 16.5004C14.83 18.1304 12.71 19.3104 10.63 19.8204C6 21.0004 3 18.0004 4.18 13.3704C4.69 11.2904 5.87 9.17036 7.5 7.50036ZM10.62 11.2604L10.26 11.6204L12.38 13.7404L12.74 13.3804L10.62 11.2604ZM11.62 10.2604L11.26 10.6204L13.38 12.7404L13.74 12.3804L11.62 10.2604ZM9.62 12.2604L9.26 12.6204L11.38 14.7404L11.74 14.3804L9.62 12.2604ZM12.63 9.28036L12.28 9.63036L14.4 11.7504L14.75 11.4004L12.63 9.28036ZM8.63 13.2804L8.28 13.6304L10.4 15.7504L10.75 15.4004L8.63 13.2804ZM13.63 8.28036L13.28 8.63036L15.4 10.7504L15.75 10.4004L13.63 8.28036Z" />
    </Svg>
  );
};
