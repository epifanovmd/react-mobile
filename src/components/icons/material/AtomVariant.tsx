import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AtomVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.36 2.64C20 2.64 21.36 4 21.36 5.64C21.36 7.29 20 8.64 18.36 8.64C16.71 8.64 15.36 7.29 15.36 5.64C15.36 5.34 15.41 5.06 15.5 4.8C14.43 4.29 13.25 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12L4.04 12.84L2.05 13.05L2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C13.69 2 15.28 2.42 16.67 3.16C17.16 2.83 17.74 2.64 18.36 2.64ZM18.36 4.64C18.0948 4.64 17.8404 4.74536 17.6529 4.93289C17.4654 5.12043 17.36 5.37478 17.36 5.64C17.36 5.90522 17.4654 6.15957 17.6529 6.34711C17.8404 6.53464 18.0948 6.64 18.36 6.64C18.92 6.64 19.36 6.19 19.36 5.64C19.36 5.08 18.92 4.64 18.36 4.64ZM5.64 15.36C7.29 15.36 8.64 16.71 8.64 18.36C8.64 18.66 8.59 18.94 8.5 19.2C9.57 19.71 10.75 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12L19.96 11.16L21.95 10.95L22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.31 22 8.72 21.58 7.33 20.84C6.84 21.17 6.26 21.36 5.64 21.36C4 21.36 2.64 20 2.64 18.36C2.64 16.71 4 15.36 5.64 15.36ZM5.64 17.36C5.08 17.36 4.64 17.81 4.64 18.36C4.64 18.92 5.08 19.36 5.64 19.36C5.90522 19.36 6.15957 19.2546 6.34711 19.0671C6.53464 18.8796 6.64 18.6252 6.64 18.36C6.64 18.0948 6.53464 17.8404 6.34711 17.6529C6.15957 17.4654 5.90522 17.36 5.64 17.36ZM12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8Z" />
    </Svg>
  );
};
