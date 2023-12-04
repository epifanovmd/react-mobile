import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HandFrontLeftOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 10.5V15.5C3 20.19 6.81 24 11.5 24C16.19 24 20 20.19 20 15.5V7C20 5.62 18.88 4.5 17.5 4.5C17.33 4.5 17.16 4.5 17 4.55V4C17 2.62 15.88 1.5 14.5 1.5C14.27 1.5 14.04 1.53 13.83 1.59C13.46 0.66 12.56 0 11.5 0C10.27 0 9.25 0.89 9.04 2.06C8.87 2 8.69 2 8.5 2C7.12 2 6 3.12 6 4.5V8.05C5.84 8 5.67 8 5.5 8C4.12 8 3 9.12 3 10.5ZM5 10.5C5 10.22 5.22 10 5.5 10C5.78 10 6 10.22 6 10.5V15C7.66 15 9 16.34 9 18H11C11 15.95 9.77 14.19 8 13.42V4.5C8 4.22 8.22 4 8.5 4C8.78 4 9 4.22 9 4.5V11H11V2.5C11 2.22 11.22 2 11.5 2C11.78 2 12 2.22 12 2.5V11H14V4C14 3.72 14.22 3.5 14.5 3.5C14.78 3.5 15 3.72 15 4V12H17V7C17 6.72 17.22 6.5 17.5 6.5C17.78 6.5 18 6.72 18 7V15.5C18 19.09 15.09 22 11.5 22C7.91 22 5 19.09 5 15.5V10.5Z" />
    </Svg>
  );
};
