import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ElectronFrameworkIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11.9999 22C10.3299 22 8.83993 20.5 7.89993 17.93C7.82993 17.73 7.92993 17.5 8.13993 17.44C8.33993 17.36 8.55993 17.47 8.62993 17.67C9.43993 19.9 10.6999 21.23 11.9999 21.23C12.9399 21.23 13.8699 20.55 14.6199 19.31C14.7299 19.13 14.9599 19.07 15.1499 19.18C15.3299 19.29 15.3899 19.53 15.2799 19.71C14.3799 21.19 13.2199 22 11.9999 22ZM15.9099 17.72C15.8699 17.72 15.8299 17.71 15.7999 17.7C15.5899 17.63 15.4999 17.42 15.5399 17.21C15.9999 15.81 16.2199 14.18 16.2199 12.5C16.2199 8.65 14.9699 5.24 13.1899 4.14C12.9399 4.5 12.4999 4.78 11.9999 4.78C11.2399 4.78 10.6099 4.16 10.6099 3.39C10.6099 2.62 11.2399 2 11.9999 2C12.7699 2 13.3999 2.61 13.4099 3.37C15.5299 4.5 16.9999 8.21 16.9999 12.5C16.9999 14.25 16.7499 15.96 16.2799 17.45C16.2299 17.61 16.0799 17.72 15.9099 17.72ZM11.9999 2.77C11.6599 2.77 11.3799 3.05 11.3799 3.39C11.3799 3.73 11.6699 4 11.9999 4C12.3499 4 12.6399 3.73 12.6399 3.39C12.6399 3.05 12.3499 2.77 11.9999 2.77ZM4.07993 18.54C3.30993 18.54 2.67993 17.91 2.67993 17.15C2.67993 16.66 2.93993 16.22 3.32993 15.97C3.18993 13.56 5.67993 10.41 9.49993 8.22C11.0899 7.32 12.7499 6.67 14.3199 6.34C14.4999 6.29 14.7299 6.42 14.7699 6.63C14.8199 6.84 14.6899 7.05 14.4999 7.09C12.9999 7.41 11.4099 8.03 9.89993 8.89C6.45993 10.86 4.09993 13.68 4.09993 15.76C4.85993 15.77 5.49993 16.39 5.49993 17.15C5.49993 17.92 4.84993 18.54 4.07993 18.54ZM4.07993 16.53C3.73993 16.53 3.45993 16.81 3.45993 17.15C3.45993 17.5 3.73993 17.77 4.07993 17.77C4.41993 17.77 4.70993 17.5 4.70993 17.15C4.70993 16.81 4.41993 16.53 4.07993 16.53ZM18.4999 13.44C18.4299 13.44 18.3399 13.41 18.2699 13.35C18.1099 13.21 18.0899 12.97 18.2299 12.8C19.7699 11 20.2999 9.26 19.6399 8.14C19.1699 7.33 18.0999 6.88 16.6299 6.86C16.4099 6.86 16.2399 6.68 16.2499 6.47C16.2499 6.26 16.4299 6.1 16.6399 6.09C18.3899 6.11 19.6999 6.7 20.3099 7.75C21.1499 9.19 20.5999 11.21 18.8199 13.3C18.7399 13.39 18.6299 13.44 18.4999 13.44ZM16.4999 18.9C14.4999 18.9 11.9399 18.16 9.49993 16.77C7.94993 15.88 6.56993 14.79 5.49993 13.63C5.34993 13.47 5.35993 13.23 5.49993 13.08C5.67993 12.94 5.91993 12.95 6.06993 13.11C7.07993 14.21 8.39993 15.25 9.88993 16.1C13.1999 18 16.7699 18.63 18.6499 17.72C18.5699 17.55 18.4999 17.35 18.4999 17.15C18.4999 16.38 19.1499 15.76 19.9199 15.76C20.6899 15.76 21.3199 16.38 21.3199 17.15C21.3199 17.92 20.6899 18.54 19.9199 18.54C19.6399 18.54 19.3899 18.46 19.1699 18.32C18.4699 18.71 17.5599 18.9 16.4999 18.9ZM19.4999 17.63C19.6299 17.71 19.7699 17.77 19.9199 17.77C20.2699 17.77 20.5499 17.5 20.5499 17.15C20.5499 16.81 20.2699 16.53 19.9199 16.53C19.5699 16.53 19.2999 16.81 19.2999 17.15C19.2999 17.29 19.3499 17.42 19.4299 17.53C19.4699 17.55 19.4999 17.59 19.4999 17.63ZM4.45993 12C4.32993 12 4.19993 11.92 4.12993 11.8C3.22993 10.25 3.07993 8.81 3.69993 7.74C4.53993 6.3 6.57993 5.76 9.30993 6.25C9.49993 6.29 9.65993 6.5 9.61993 6.7C9.58993 6.91 9.38993 7.05 9.17993 7C6.81993 6.59 4.99993 7 4.36993 8.13C3.88993 8.95 4.03993 10.11 4.79993 11.41C4.89993 11.6 4.83993 11.83 4.64993 11.94C4.58993 11.97 4.52993 12 4.45993 12ZM12.2099 13.4C11.7099 13.5 11.2099 13.19 11.1099 12.69C10.9999 12.2 11.3199 11.71 11.8099 11.6C12.3099 11.5 12.8099 11.81 12.9099 12.31C12.9999 12.8 12.6999 13.29 12.2099 13.4Z" />
    </Svg>
  );
};
