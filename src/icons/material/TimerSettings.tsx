import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TimerSettingsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19 6.4L20.5 5C20 4.5 19.5 4 19 3.6L17.6 5C16 3.7 14.1 3 12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 9.9 20.3 7.9 19 6.4ZM13 13H11V6H13V13ZM15 0H9V2H15V0ZM13 24H11V22H13V24ZM17 24H15V22H17V24ZM9 24H7V22H9V24Z" />
    </Svg>
  );
};
