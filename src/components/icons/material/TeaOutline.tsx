import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TeaOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 19H20V21H4V19ZM21.4 3.6C21 3.2 20.6 3 20 3H4V13C4 14.1 4.4 15 5.2 15.8C6 16.6 6.9 17 8 17H14C15.1 17 16 16.6 16.8 15.8C17.6 15 18 14.1 18 13V10H20C20.6 10 21 9.8 21.4 9.4C21.8 9 22 8.6 22 8V5C22 4.5 21.8 4 21.4 3.6ZM16 5V8V10V13C16 13.6 15.8 14 15.4 14.4C15 14.8 14.6 15 14 15H8C7.4 15 7 14.8 6.6 14.4C6.2 14 6 13.5 6 13V5H10V6.4L8.2 7.8C8 7.9 8 8.1 8 8.2V12.5C8 12.8 8.2 13 8.5 13H12.5C12.8 13 13 12.8 13 12.5V8.2C13 8 12.9 7.9 12.8 7.8L11 6.4V5H16ZM20 8H18V5H20V8Z" />
    </Svg>
  );
};
