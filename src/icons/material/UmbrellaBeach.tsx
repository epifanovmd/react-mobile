import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UmbrellaBeachIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13.13 14.5602L14.56 13.1302L21 19.5702L19.57 21.0002L13.13 14.5602ZM17.42 8.83024L20.28 5.97024C16.33 2.00024 9.93 2.00024 6 5.95024C9.91 4.65024 14.29 5.70024 17.42 8.83024ZM5.95 6.00024C1.99999 9.93024 1.99999 16.3302 5.97 20.2802L8.83 17.4202C5.7 14.2902 4.65 9.91024 5.95 6.00024ZM5.97 5.96024L5.96 5.97024C5.58 9.00024 7.13 12.8502 10.26 16.0002L16 10.2602C12.86 7.13024 9 5.58024 5.97 5.96024Z" />
    </Svg>
  );
};
