import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FoodOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1 22C1 22.54 1.45 23 2 23H15C15.56 23 16 22.54 16 22V21H1V22ZM8.5 9C4.75 9 1 11 1 15H16C16 11 12.25 9 8.5 9ZM3.62 13C4.73 11.45 7.09 11 8.5 11C9.91 11 12.27 11.45 13.38 13H3.62ZM1 17H16V19H1V17ZM18 5V1H16V5H11L11.23 7H20.79L19.39 21H18V23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5H18Z" />
    </Svg>
  );
};
