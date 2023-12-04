import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BicyclePennyFarthingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.5 5.06V2H12V4H13.5V5.04C12.71 5.11 11.94 5.27 11.2 5.5C11.03 5.2 10.72 5 10.36 5H7C6.45 5 6 5.45 6 6C6 6.55 6.45 7 7 7H8.05C5.09 9 3.12 12.36 3 16.18C1.85 16.59 1 17.69 1 19C1 20.66 2.34 22 4 22C5.66 22 7 20.66 7 19C7 17.7 6.17 16.61 5 16.19C5.07 14.67 5.46 13.25 6.14 12C6.05 12.5 6 13 6 13.5C6 18.19 9.81 22 14.5 22C19.19 22 23 18.19 23 13.5C23 9.14 19.72 5.56 15.5 5.06ZM4 20C3.45 20 3 19.55 3 19C3 18.45 3.45 18 4 18C4.55 18 5 18.45 5 19C5 19.55 4.55 20 4 20ZM14.5 20C10.92 20 8 17.08 8 13.5C8 10.26 10.39 7.57 13.5 7.09V15H15.5V7.09C18.61 7.57 21 10.26 21 13.5C21 17.08 18.08 20 14.5 20Z" />
    </Svg>
  );
};
