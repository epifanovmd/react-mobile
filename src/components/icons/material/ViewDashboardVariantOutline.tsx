import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ViewDashboardVariantOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 5V19H22V5H2ZM20 12H16V7H20V12ZM14 10H10V7H14V10ZM10 12H14V17H10V12ZM4 7H8V17H4V7ZM16 17V14H20V17H16Z" />
    </Svg>
  );
};
