import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DeleteClockOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 13H16.5V15.82L18.94 17.23L18.19 18.53L15 16.69V13ZM23 16C23 19.87 19.87 23 16 23C14.09 23 12.36 22.24 11.1 21H8C6.9 21 6 20.1 6 19V7H18V9.29C20.89 10.15 23 12.83 23 16ZM9 16C9 12.13 12.13 9 16 9H8V19H9.67C9.24 18.09 9 17.07 9 16ZM16 11C13.24 11 11 13.24 11 16C11 18.76 13.24 21 16 21C18.76 21 21 18.76 21 16C21 13.24 18.76 11 16 11ZM15.5 4H19V6H5V4H8.5L9.5 3H14.5L15.5 4Z" />
    </Svg>
  );
};
