import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FaceWomanOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C6.5 2 2 6.5 2 12V22H22V12C22 6.5 17.5 2 12 2ZM12 4C14.9 4 17.44 5.56 18.84 7.88C18.41 7.95 17.96 8 17.5 8C14.6 8 12.06 6.44 10.66 4.12C11.09 4.05 11.54 4 12 4ZM8.08 5.03C7.45 6.92 6.13 8.5 4.42 9.47C5.05 7.58 6.37 6 8.08 5.03ZM4 11.86C6.6 10.88 8.69 8.87 9.74 6.31C11.58 8.56 14.37 10 17.5 10C18.25 10 18.97 9.91 19.67 9.76C19.88 10.47 20 11.22 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12V11.86ZM4 20V18C4.57 18.75 5.25 19.43 6 20H4ZM20 20H18C18.75 19.43 19.43 18.75 20 18V20ZM13.75 13C13.75 12.31 14.31 11.75 15 11.75C15.69 11.75 16.25 12.31 16.25 13C16.25 13.69 15.69 14.25 15 14.25C14.31 14.25 13.75 13.69 13.75 13ZM7.75 13C7.75 12.31 8.31 11.75 9 11.75C9.69 11.75 10.25 12.31 10.25 13C10.25 13.69 9.69 14.25 9 14.25C8.31 14.25 7.75 13.69 7.75 13Z" />
    </Svg>
  );
};
