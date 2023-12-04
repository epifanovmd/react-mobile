import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MicrosoftOutlookIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8.56 12.03C8.56 12.2833 8.54 12.5267 8.5 12.76C8.42667 12.9867 8.32667 13.1933 8.2 13.38C8.06667 13.56 7.90333 13.7033 7.71 13.81C7.51 13.9167 7.27333 13.97 7 13.97C6.72 13.97 6.48333 13.9133 6.29 13.8C6.09667 13.6867 5.93667 13.5367 5.81 13.35C5.68333 13.1633 5.59333 12.9533 5.54 12.72C5.48 12.4867 5.45 12.2467 5.45 12C5.45 11.76 5.48 11.52 5.54 11.28C5.59333 11.0467 5.68333 10.8367 5.81 10.65C5.93667 10.4633 6.10333 10.3133 6.31 10.2C6.51 10.0867 6.75 10.03 7.03 10.03C7.31667 10.03 7.55667 10.0867 7.75 10.2C7.95 10.32 8.11 10.4733 8.23 10.66C8.35 10.8533 8.44 11.0667 8.5 11.3C8.54 11.54 8.56 11.7833 8.56 12.03ZM22 12V19.81C22 20.07 21.91 20.3 21.73 20.5C21.5433 20.6667 21.32 20.75 21.06 20.75H7.94C7.68 20.75 7.45667 20.6667 7.27 20.5C7.09 20.3 7 20.07 7 19.81V17H2.83C2.61 17 2.41333 16.92 2.24 16.76C2.08 16.5867 2 16.39 2 16.17V7.83C2 7.61 2.08 7.41333 2.24 7.24C2.41333 7.08 2.61 7 2.83 7H8.25V4.13C8.25 3.88333 8.33333 3.67333 8.5 3.5C8.67333 3.33333 8.88333 3.25 9.13 3.25H19.87C20.1167 3.25 20.3267 3.33333 20.5 3.5C20.6667 3.67333 20.75 3.88333 20.75 4.13V11.04L21.79 11.64H21.8C21.8533 11.68 21.9 11.7333 21.94 11.8C21.98 11.86 22 11.9267 22 12ZM17 5.13V7.63H19.5V5.13H17ZM17 8.88V11.38H19.5V8.88H17ZM17 12.63V14.15L19.54 12.63H17ZM12.63 5.13V7.63H15.75V5.13H12.63ZM12.63 8.88V11.38H15.75V8.88H12.63ZM12.63 12.63V14.32L14.64 15.56L15.75 14.9V12.63H12.63ZM9.5 5.13V7H11.27C11.31 7 11.3467 7.01333 11.38 7.04V5.12L9.5 5.13ZM7 15.32C7.48667 15.32 7.92667 15.2333 8.32 15.06C8.70667 14.8867 9.03667 14.65 9.31 14.35C9.57667 14.05 9.77667 13.6933 9.91 13.28C10.05 12.8667 10.1233 12.42 10.13 11.94C10.13 11.48 10.06 11.05 9.92 10.65C9.78667 10.2567 9.58667 9.91333 9.32 9.62C9.06 9.32667 8.74333 9.09667 8.37 8.93C7.99 8.76333 7.56 8.68 7.08 8.68C6.56667 8.68 6.11 8.76333 5.71 8.93C5.31667 9.09667 4.98333 9.33 4.71 9.63C4.43667 9.93667 4.23 10.2967 4.09 10.71C3.95 11.13 3.88 11.5867 3.88 12.08C3.88 12.5467 3.95 12.98 4.09 13.38C4.23667 13.7733 4.44333 14.1133 4.71 14.4C4.97667 14.6867 5.3 14.9133 5.68 15.08C6.06667 15.24 6.50667 15.32 7 15.32ZM8.25 19.5H18.57L12 15.4V16.17C12 16.39 11.92 16.5867 11.76 16.76C11.5867 16.92 11.39 17 11.17 17H8.25V19.5ZM20.75 19.39V13.36L15.83 16.31L20.75 19.39Z" />
    </Svg>
  );
};
