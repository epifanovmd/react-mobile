import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShieldAirplaneIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 5.68C12.5 5.68 12.95 6.11 12.95 6.63V10.11L18 13.26V14.53L12.95 12.95V16.42L14.21 17.37V18.32L12 17.68L9.79 18.32V17.37L11.05 16.42V12.95L6 14.53V13.26L11.05 10.11V6.63C11.05 6.11 11.5 5.68 12 5.68Z" />
    </Svg>
  );
};
