import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ViewWeekOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 4H3C2.45 4 2 4.45 2 5V19C2 19.55 2.45 20 3 20H21C21.55 20 22 19.55 22 19V5C22 4.45 21.55 4 21 4ZM8 18H4V6H8V18ZM14 18H10V6H14V18ZM20 18H16V6H20V18Z" />
    </Svg>
  );
};
