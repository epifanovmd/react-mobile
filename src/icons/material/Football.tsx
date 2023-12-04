import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FootballIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M8.39 21L3 15.61C3 16.7 3.04 17.71 3.2 18.63C3.35 19.55 3.5 20.1 3.71 20.29C3.9 20.5 4.44 20.65 5.35 20.81C6.26 20.97 7.27 21 8.39 21ZM15.5 9.89L9.89 15.5L8.5 14.11L14.11 8.5L15.5 9.89ZM3.29 13.08L10.92 20.71C13.7 20.21 15.9 19.15 17.53 17.53C19.15 15.9 20.21 13.7 20.71 10.92L13.08 3.29C10.3 3.79 8.1 4.85 6.47 6.47C4.84 8.09 3.79 10.3 3.29 13.08ZM15.61 3L21 8.39C21 7.3 20.96 6.29 20.81 5.37C20.65 4.45 20.5 3.9 20.29 3.71C20.1 3.5 19.56 3.35 18.65 3.2C17.74 3.05 16.73 3 15.61 3Z" />
    </Svg>
  );
};
