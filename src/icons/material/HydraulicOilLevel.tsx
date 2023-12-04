import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HydraulicOilLevelIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 18C13.34 18 12 16.66 12 15C12 13 15 9.63 15 9.63C15 9.63 18 13 18 15C18 16.66 16.66 18 15 18ZM20 4V20H10V4H8V20C8 21.11 8.89 22 10 22H20C21.11 22 22 21.11 22 20V4H20ZM2 19L7 14L2 9V19ZM16 6V2H14V6H11V8H19V6H16Z" />
    </Svg>
  );
};
