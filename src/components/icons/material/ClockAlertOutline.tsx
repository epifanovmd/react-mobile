import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ClockAlertOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11ZM20 12V18H22V12H20ZM20 20V22H22V20H20ZM18 20C16.3 21.3 14.3 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z" />
    </Svg>
  );
};
