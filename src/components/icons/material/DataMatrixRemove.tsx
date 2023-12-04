import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DataMatrixRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 2V4H14V2H16ZM12 2H10V6H12V2ZM10 14H8V16H10V14ZM16 4V6H14V8H18V4H16ZM8 2H6V6H8V2ZM20 2H18V4H20V2ZM13.8 22H2V2H4V6H6V12H4V14H6V16H8V18H10V20H12V18H10V16H12V12H8V8H12V10H14V12H16V10H18V12H22V13.8C21.1 13.3 20.1 13 19 13C17.8 13 16.6 13.4 15.7 14H14V15.7C13.4 16.6 13 17.8 13 19C13 20.1 13.3 21.1 13.8 22ZM6 18H4V20H6V18ZM22 8H18V10H22V8ZM22 6V4H20V6H22ZM21.1 15.5L19 17.6L16.9 15.5L15.5 16.9L17.6 19L15.5 21.1L16.9 22.5L19 20.4L21.1 22.5L22.5 21.1L20.4 19L22.5 16.9L21.1 15.5Z" />
    </Svg>
  );
};
