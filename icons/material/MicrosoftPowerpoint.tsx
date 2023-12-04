import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MicrosoftPowerpointIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13.25 3.25C14.0567 3.25 14.8333 3.35333 15.58 3.56C16.3267 3.77333 17.0233 4.07 17.67 4.45C18.3167 4.81667 18.9067 5.27 19.44 5.81C19.9667 6.34333 20.42 6.93333 20.8 7.58C21.1867 8.22667 21.4833 8.92333 21.69 9.67C21.8967 10.4167 22 11.1933 22 12C22 12.8067 21.8967 13.5833 21.69 14.33C21.4833 15.0767 21.1867 15.7733 20.8 16.42C20.42 17.0667 19.9667 17.6567 19.44 18.19C18.9067 18.73 18.3167 19.1833 17.67 19.55C17.0233 19.9367 16.3267 20.2333 15.58 20.44C14.8333 20.6467 14.0567 20.75 13.25 20.75C12.5367 20.75 11.8367 20.6667 11.15 20.5C10.4633 20.3267 9.81333 20.08 9.2 19.76C8.58667 19.4333 8.02 19.04 7.5 18.58C6.96 18.1133 6.48333 17.5867 6.07 17H2.83C2.61 17 2.41333 16.92 2.24 16.76C2.08 16.5867 2 16.39 2 16.17V7.83C2 7.61 2.08 7.41667 2.24 7.25C2.41333 7.08333 2.61 7 2.83 7H6.07C6.48333 6.41333 6.96 5.88667 7.5 5.42C8.02 4.95333 8.58667 4.56 9.2 4.24C9.82 3.92 10.47 3.67333 11.15 3.5C11.8367 3.33333 12.5367 3.25 13.25 3.25ZM13.88 4.53V11.37H20.72C20.64 10.4567 20.41 9.60333 20.03 8.81C19.65 8.01667 19.1567 7.31333 18.55 6.7C17.9433 6.09333 17.2367 5.6 16.43 5.22C15.63 4.84 14.78 4.61 13.88 4.53ZM9.5 10.84C9.5 10.46 9.43333 10.1367 9.3 9.87C9.17333 9.59667 9 9.37667 8.78 9.21C8.56 9.03667 8.3 8.91333 8 8.84C7.7 8.76 7.36667 8.72 7 8.72H4.37V15.27H5.91V13H6.94C7.26 13 7.57 12.9467 7.87 12.84C8.17667 12.7467 8.45 12.61 8.69 12.43C8.93 12.2567 9.12333 12.0333 9.27 11.76C9.42333 11.4933 9.5 11.1867 9.5 10.84ZM13.25 19.5C13.9033 19.5 14.5333 19.42 15.14 19.26C15.74 19.0867 16.31 18.86 16.85 18.58C17.39 18.28 17.8833 17.92 18.33 17.5C18.7767 17.0933 19.1667 16.6367 19.5 16.13C19.8333 15.6167 20.11 15.0633 20.33 14.47C20.5367 13.8767 20.6667 13.26 20.72 12.62H12.64V4.53C11.6733 4.61 10.7633 4.86333 9.91 5.29C9.05667 5.71667 8.31 6.28667 7.67 7H11.17C11.39 7 11.5867 7.08333 11.76 7.25C11.92 7.41667 12 7.61 12 7.83V16.17C12 16.39 11.92 16.5867 11.76 16.76C11.5867 16.92 11.39 17 11.17 17H7.67C8.02333 17.4 8.41333 17.7533 8.84 18.06C9.28 18.3533 9.73 18.6133 10.19 18.84C10.67 19.06 11.1667 19.2233 11.68 19.33C12.1933 19.4433 12.7167 19.5 13.25 19.5ZM6.85 10C7.16333 10 7.41667 10.0633 7.61 10.19C7.79667 10.3167 7.89 10.55 7.89 10.89C7.89 11.0367 7.85667 11.1567 7.79 11.25C7.72333 11.3433 7.63667 11.4267 7.53 11.5C7.42333 11.5467 7.30667 11.58 7.18 11.6C7.06 11.6267 6.93333 11.64 6.8 11.64H5.91V10H6.85Z" />
    </Svg>
  );
};