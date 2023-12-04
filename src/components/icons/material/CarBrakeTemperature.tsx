import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CarBrakeTemperatureIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 10H15V8H12V7C12 6.4 11.6 6 11 6C10.4 6 10 6.4 10 7V17.3C9.4 17.6 9 18.3 9 19C9 20.1 9.9 21 11 21C12.1 21 13 20.1 13 19C13 18.3 12.6 17.6 12 17.3V14H15V12H12V10ZM24 12C24 15.31 22.66 18.31 20.5 20.5L19.42 19.42C21.32 17.5 22.5 14.9 22.5 12C22.5 9.11 21.32 6.5 19.42 4.58L20.5 3.5C22.66 5.69 24 8.69 24 12ZM1.5 12C1.5 14.9 2.68 17.5 4.58 19.42L3.5 20.5C1.34 18.31 0 15.31 0 12C0 8.69 1.34 5.69 3.5 3.5L4.58 4.58C2.68 6.5 1.5 9.11 1.5 12ZM21 12C21 15.53 18.96 18.58 16 20.05V17.74C17.81 16.47 19 14.37 19 12C19 8.14 15.86 5 12 5C8.14 5 5 8.14 5 12C5 14.37 6.19 16.47 8 17.74V20.05C5.04 18.58 3 15.53 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" />
    </Svg>
  );
};
