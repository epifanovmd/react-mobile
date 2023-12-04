import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FirefoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6.85 6.73992C6.86 6.73992 6.86 6.73992 6.85 6.73992V6.73992ZM21.28 8.59992C20.85 7.54992 19.96 6.41992 19.27 6.05992C19.83 7.16992 20.16 8.27992 20.29 9.09992V9.11992C19.16 6.29992 17.24 5.15992 15.67 2.67992C15.59 2.55992 15.5 2.42992 15.43 2.29992C15.39 2.22992 15.36 2.15992 15.32 2.08992C15.26 1.95992 15.2 1.82992 15.17 1.68992C15.17 1.67992 15.16 1.66992 15.15 1.66992H15.13H15.12C12.9 2.96992 11.97 5.25992 11.74 6.70992C11.05 6.74992 10.37 6.91992 9.75 7.21992C9.63 7.26992 9.58 7.40992 9.62 7.52992C9.67 7.66992 9.83 7.73992 9.96 7.67992C10.5 7.41992 11.1 7.26992 11.7 7.22992H11.75C11.83 7.21992 11.92 7.21992 12 7.21992C12.5 7.20992 12.97 7.27992 13.44 7.41992L13.5 7.43992C13.6 7.45992 13.67 7.49992 13.75 7.49992C13.8 7.53992 13.86 7.55992 13.91 7.57992L14.05 7.63992C14.12 7.66992 14.19 7.69992 14.25 7.72992C14.28 7.74992 14.31 7.75992 14.34 7.77992C14.41 7.81992 14.5 7.84992 14.54 7.88992C14.58 7.90992 14.62 7.93992 14.66 7.95992C15.39 8.40992 16 9.02992 16.41 9.76992C15.88 9.39992 14.92 9.02992 14 9.18992C17.6 10.9999 16.63 17.1899 11.64 16.9499C11.2 16.9399 10.76 16.8499 10.34 16.6999C10.24 16.6699 10.14 16.6299 10.05 16.5799C10 16.5599 9.93 16.5299 9.88 16.4999C8.65 15.8699 7.64 14.6799 7.5 13.2299C7.5 13.2299 8 11.4999 10.83 11.4999C11.14 11.4999 12 10.6399 12.03 10.3999C12.03 10.3099 10.29 9.61992 9.61 8.94992C9.24 8.58992 9.07 8.41992 8.92 8.28992C8.84 8.21992 8.75 8.15992 8.66 8.09992C8.43 7.29992 8.42 6.44992 8.63 5.64992C7.6 6.11992 6.8 6.85992 6.22 7.49992C5.82 6.99992 5.85 5.34992 5.87 4.99992C5.86 4.99992 5.57 5.15992 5.54 5.17992C5.19 5.42992 4.86 5.70992 4.56 5.99992C4.21 6.36992 3.9 6.73992 3.62 7.13992C3 8.04992 2.5 9.08992 2.28 10.1799C2.28 10.1899 2.18 10.5899 2.11 11.0999L2.08 11.3299C2.06 11.4999 2.04 11.6499 2 11.9099V11.9399V12.2699V12.3199C2 17.8499 6.5 22.3299 12 22.3299C16.97 22.3299 21.08 18.7399 21.88 13.9999C21.9 13.8899 21.91 13.7599 21.93 13.6299C22.13 11.9099 21.91 10.1099 21.28 8.59992Z" />
    </Svg>
  );
};
