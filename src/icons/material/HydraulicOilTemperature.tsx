import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HydraulicOilTemperatureIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 18C7.34 18 6 16.66 6 15C6 13 9 9.63 9 9.63C9 9.63 12 13 12 15C12 16.66 10.66 18 9 18ZM14 4V20H4V4H2V20C2 21.11 2.89 22 4 22H14C15.11 22 16 21.11 16 20V4H14ZM10 6V2H8V6H5V8H13V6H10ZM21 17.5V5.5C21 4.67 20.33 4 19.5 4C18.67 4 18 4.67 18 5.5V17.5C17.37 17.97 17 18.71 17 19.5C17 20.88 18.12 22 19.5 22C20.88 22 22 20.88 22 19.5C22 18.71 21.63 18 21 17.5ZM20 13H19V6H20V13Z" />
    </Svg>
  );
};
