import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MessageTextClockOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 12.41V4C22 2.9 21.11 2 20 2H4C2.9 2 2 2.89 2 4V22L6 18H9.29C10.15 20.89 12.83 23 16 23C19.86 23 23 19.87 23 16C23 14.69 22.63 13.46 22 12.41ZM5.17 16L4 17.17V4H20V10.26C18.86 9.47 17.5 9 16 9C14.1 9 12.37 9.77 11.11 11H6V13H9.69C9.25 13.91 9 14.93 9 16H5.17ZM16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15C18.67 11.15 20.85 13.32 20.85 16C20.85 18.68 18.67 20.85 16 20.85ZM18 9H6V7H18V9ZM16.5 15.82L18.94 17.23L18.19 18.53L15 16.69V13H16.5V15.82Z" />
    </Svg>
  );
};
