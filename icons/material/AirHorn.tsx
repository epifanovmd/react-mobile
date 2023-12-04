import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AirHornIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 2.79998V5.99998V9.19998C19 9.49998 18.7 9.79997 18.4 9.69998C18.4 9.69998 14.5 7.09998 10 7.09998V9.49998H10.2C10.7 9.49998 11.2 9.69998 11.4 10.1L12.7 11.9C12.9 12.1 13 12.4 13 12.6V20.6C13 21.3 12.3 22 11.5 22H6.5C5.7 22 5 21.4 5 20.6V12.6C5 12.3 5.1 12.1 5.3 11.9L6.6 10.1C6.9 9.69998 7.3 9.49998 7.8 9.49998H8V7.99998C7.6 8.49998 7 8.79998 6.4 8.79998C5.1 8.79998 4 7.49998 4 5.99998C4 4.49998 5.1 3.19998 6.4 3.19998C7 3.29998 7.6 3.59998 8 3.99998V2.59998H10V4.99998C14.5 4.99998 18.4 2.39998 18.4 2.39998C18.7 2.29998 19 2.49998 19 2.79998Z" />
    </Svg>
  );
};
