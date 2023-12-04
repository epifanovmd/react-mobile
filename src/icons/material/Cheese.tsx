import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CheeseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 17.5C11 16.67 11.67 16 12.5 16C12.79 16 13.06 16.09 13.29 16.23L20.75 11.93C20.35 11.22 19.9 10.55 19.41 9.9C19.29 9.96 19.15 10 19 10C18.45 10 18 9.55 18 9C18 8.8 18.08 8.62 18.18 8.46C16.45 6.64 14.34 5.2 12 4.25C11.85 5.24 11 6 10 6C8.9 6 8 5.11 8 4C8 3.72 8.06 3.45 8.16 3.21C7.3 3.08 6.41 3 5.5 3C5.33 3 5.17 3 5 3.03V9.05C6.14 9.28 7 10.29 7 11.5C7 12.71 6.14 13.72 5 13.95V21L11 17.54C11 17.53 11 17.5 11 17.5ZM14 9C15.11 9 16 9.9 16 11C16 12.1 15.11 13 14 13C12.89 13 12 12.11 12 11C12 9.89 12.9 9 14 9ZM9 16C8.45 16 8 15.55 8 15C8 14.45 8.45 14 9 14C9.55 14 10 14.45 10 15C10 15.55 9.55 16 9 16ZM9 10C8.45 10 8 9.55 8 9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9C10 9.55 9.55 10 9 10Z" />
    </Svg>
  );
};
