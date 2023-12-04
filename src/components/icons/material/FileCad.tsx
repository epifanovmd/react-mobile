import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FileCadIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2H6ZM13 3.5L18.5 9H13V3.5ZM9.88 9.25H11.12V10.19C11.81 10.18 12.38 10.75 12.38 11.44V13.5L12.26 13.63L13.15 15.17C13.47 14.67 13.63 14.09 13.62 13.5H14.88C14.88 14.54 14.5 15.55 13.83 16.35L15.5 19.25V20.5L14.42 19.88L12.87 17.19C12.17 17.65 11.34 17.89 10.5 17.89C9.66 17.89 8.84 17.65 8.13 17.19L6.58 19.88L5.5 20.5V19.25L8.74 13.63L8.62 13.5V11.44C8.62 10.75 9.19 10.18 9.88 10.19V9.25ZM10.5 11.44C9.81 11.44 9.46 12.28 9.95 12.77C10.44 13.26 11.28 12.92 11.28 12.22C11.28 11.79 10.93 11.44 10.5 11.44ZM9.66 14.54L8.76 16.11C9.81 16.82 11.19 16.82 12.24 16.11L11.34 14.54C10.87 15 10.13 15 9.66 14.54Z" />
    </Svg>
  );
};
