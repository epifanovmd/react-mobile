import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ScriptTextPlayIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13.8 22H5C3.3 22 2 20.7 2 19V18H13.1C13 18.3 13 18.7 13 19C13 20.1 13.3 21.1 13.8 22ZM13.8 16H5V5C5 3.3 6.3 2 8 2H19C20.7 2 22 3.3 22 5V6H20V5C20 4.4 19.6 4 19 4C18.4 4 18 4.4 18 5V13.1C16.2 13.4 14.7 14.5 13.8 16ZM8 8H15V6H8V8ZM8 12H14V10H8V12ZM17 16V22L22 19L17 16Z" />
    </Svg>
  );
};
