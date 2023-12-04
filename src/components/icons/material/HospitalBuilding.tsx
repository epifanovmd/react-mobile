import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HospitalBuildingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 22V7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H7V2H17V6H21C21.2652 6 21.5196 6.10536 21.7071 6.29289C21.8946 6.48043 22 6.73478 22 7V22H14V17H10V22H2ZM9 4V10H11V8H13V10H15V4H13V6H11V4H9ZM4 20H8V17H4V20ZM4 15H8V12H4V15ZM16 20H20V17H16V20ZM16 15H20V12H16V15ZM10 15H14V12H10V15Z" />
    </Svg>
  );
};
