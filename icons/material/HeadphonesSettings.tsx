import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HeadphonesSettingsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10V17C21 17.7956 20.6839 18.5587 20.1213 19.1213C19.5587 19.6839 18.7956 20 18 20H15V12H19V10C19 8.14348 18.2625 6.36301 16.9497 5.05025C15.637 3.7375 13.8565 3 12 3C10.1435 3 8.36301 3.7375 7.05025 5.05025C5.7375 6.36301 5 8.14348 5 10V12H9V20H6C5.20435 20 4.44129 19.6839 3.87868 19.1213C3.31607 18.5587 3 17.7956 3 17V10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1ZM15 24V22H17V24H15ZM11 24V22H13V24H11ZM7 24V22H9V24H7Z" />
    </Svg>
  );
};
