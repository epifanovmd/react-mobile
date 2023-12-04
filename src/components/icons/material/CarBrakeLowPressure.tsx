import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CarBrakeLowPressureIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12ZM10 12L7 9V11H3V13H7V15L10 12ZM14 12L17 15V13H21V11H17V9L14 12ZM20.5 3.5L19.42 4.58C21.32 6.5 22.5 9.11 22.5 12C22.5 14.9 21.32 17.5 19.42 19.42L20.5 20.5C22.66 18.31 24 15.31 24 12C24 8.69 22.66 5.69 20.5 3.5ZM5.69 9C6.81 6.64 9.22 5 12 5C14.78 5 17.19 6.64 18.32 9H20.5C19.24 5.5 15.92 3 12 3C8.08 3 4.76 5.5 3.5 9H5.69ZM4.58 4.58L3.5 3.5C1.34 5.69 0 8.69 0 12C0 15.31 1.34 18.31 3.5 20.5L4.58 19.42C2.68 17.5 1.5 14.9 1.5 12C1.5 9.11 2.68 6.5 4.58 4.58ZM18.32 15C17.19 17.36 14.79 19 12 19C9.21 19 6.81 17.36 5.69 15H3.5C4.76 18.5 8.08 21 12 21C15.92 21 19.24 18.5 20.5 15H18.32Z" />
    </Svg>
  );
};
