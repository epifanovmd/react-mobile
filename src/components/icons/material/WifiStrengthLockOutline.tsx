import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WifiStrengthLockOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23.65 7H23.64L20.91 10.39C20.32 10.14 19.68 10 19 10C18.87 10 18.75 10.03 18.63 10.04L20.71 7.45C18.09 5.86 15.07 5 12 5C8.90998 5 5.89998 5.85 3.26998 7.44L12 18.3L13 17C13 17.08 13 17.14 13 17.2V20.25L12 21.5C8.12998 16.66 4.23998 11.83 0.35498 7H0.37498C3.69998 4.41 7.78998 3 12 3C16.22 3 20.32 4.41 23.65 7ZM23 17.3V20.8C23 21.4 22.4 22 21.7 22H16.2C15.6 22 15 21.4 15 20.7V17.2C15 16.6 15.6 16 16.2 16V14.5C16.2 13.1 17.6 12 19 12C20.4 12 21.8 13.1 21.8 14.5V16C22.4 16 23 16.6 23 17.3ZM20.5 14.5C20.5 13.7 19.8 13.2 19 13.2C18.2 13.2 17.5 13.7 17.5 14.5V16H20.5V14.5Z" />
    </Svg>
  );
};
