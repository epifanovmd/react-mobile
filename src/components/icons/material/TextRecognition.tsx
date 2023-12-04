import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TextRecognitionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 4C2 2.9 2.9 2 4 2H8V4H4V8H2V4ZM22 20C22 21.11 21.11 22 20 22H16V20H20V16H22V20ZM4 22C2.9 22 2 21.11 2 20V16H4V20H8V22H4ZM20 2C21.11 2 22 2.9 22 4V8H20V4H16V2H20ZM9 7V9H11V17H13V9H15V7H9Z" />
    </Svg>
  );
};
