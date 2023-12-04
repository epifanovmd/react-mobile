import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WidgetsOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.7 4.49922L19.5 7.29922L16.7 10.0992L13.9 7.29922L16.7 4.49922ZM9 4.99922V8.99922H5V4.99922H9ZM19 14.9992V18.9992H15V14.9992H19ZM16.7 1.69922L11 7.29922L16.7 12.9992H13V20.9992H21V12.9992H16.7L22.3 7.29922L16.7 1.69922ZM11 2.99922H3V10.9992H11V2.99922ZM9 14.9992V18.9992H5V14.9992H9ZM11 12.9992H3V20.9992H11V12.9992Z" />
    </Svg>
  );
};
