import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SprayIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 4H12V6H10V4ZM7 3H9V5H7V3ZM7 6H9V8H7V6ZM6 8V10H4V8H6ZM6 5V7H4V5H6ZM6 2V4H4V2H6ZM13 22C12.4696 22 11.9609 21.7893 11.5858 21.4142C11.2107 21.0391 11 20.5304 11 20V10C11 9.46957 11.2107 8.96086 11.5858 8.58579C11.9609 8.21071 12.4696 8 13 8V7H14V4H17V7H18V8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H13ZM13 10V20H18V10H13Z" />
    </Svg>
  );
};
