import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const StoreClockOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 4H2V2H18V4ZM17.5 13H16V18L19.61 20.16L20.36 18.94L17.5 17.25V13ZM24 17C24 20.87 20.87 24 17 24C13.47 24 10.57 21.39 10.08 18H2V12H1V10L2 5H18L19 10V10.29C21.89 11.16 24 13.83 24 17ZM3.04 10H16.96L16.36 7H3.64L3.04 10ZM4 16H10V12H4V16ZM22 17C22 14.24 19.76 12 17 12C14.24 12 12 14.24 12 17C12 19.76 14.24 22 17 22C19.76 22 22 19.76 22 17Z" />
    </Svg>
  );
};
