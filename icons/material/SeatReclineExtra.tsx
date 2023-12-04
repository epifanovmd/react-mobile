import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SeatReclineExtraIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.35 5.63938C4.45 4.99938 4.23 3.75938 4.86 2.84938C5.5 1.94938 6.74 1.72938 7.65 2.35938C8.55 2.99938 8.77 4.23938 8.14 5.14938C7.5 6.04938 6.26 6.26938 5.35 5.63938ZM16 18.9994H8.93C7.45 18.9994 6.19 17.9194 5.97 16.4594L4 6.99938H2L4 16.7594C4.37 19.1994 6.47 20.9994 8.94 20.9994H16V18.9994ZM16.23 14.9994H11.35L10.32 10.8994C11.9 11.7894 13.6 12.4394 15.47 12.1194V9.99938C13.84 10.2994 12.03 9.71938 10.78 8.73938L9.14 7.46938C8.91 7.28938 8.65 7.16938 8.38 7.08938C8.06 6.99938 7.72 6.96938 7.39 7.02938H7.37C6.14 7.24938 5.32 8.41938 5.53 9.63938L6.88 15.5594C7.16 16.9994 8.39 17.9994 9.83 17.9994H16.68L20.5 20.9994L22 19.4994" />
    </Svg>
  );
};
