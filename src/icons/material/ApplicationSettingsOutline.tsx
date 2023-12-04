import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ApplicationSettingsOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 0H3C1.9 0 1 0.9 1 2V18C1 19.1 1.9 20 3 20H21C22.1 20 23 19.1 23 18V2C23 0.9 22.1 0 21 0ZM21 18H3V4H21V18ZM7 22H9V24H7V22ZM11 22H13V24H11V22ZM15 22H17V24H15V22Z" />
    </Svg>
  );
};
