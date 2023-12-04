import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SyncAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 13H13V7H11V13ZM21 4H15V10L17.24 7.76C18.32 8.85 19 10.34 19 12C19 14.61 17.33 16.83 15 17.65V19.74C18.45 18.85 21 15.73 21 12C21 9.79 20.09 7.8 18.64 6.36L21 4ZM11 17H13V15H11V17ZM3 12C3 14.21 3.91 16.2 5.36 17.64L3 20H9V14L6.76 16.24C5.68 15.15 5 13.66 5 12C5 9.39 6.67 7.17 9 6.35V4.26C5.55 5.15 3 8.27 3 12Z" />
    </Svg>
  );
};
