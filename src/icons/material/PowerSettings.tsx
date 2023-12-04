import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PowerSettingsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 24H17V22H15V24ZM16.56 4.44L15.11 5.89C16.84 6.94 18 8.83 18 11C18 12.5913 17.3679 14.1174 16.2426 15.2426C15.1174 16.3679 13.5913 17 12 17C10.4087 17 8.88258 16.3679 7.75736 15.2426C6.63214 14.1174 6 12.5913 6 11C6 8.83 7.16 6.94 8.88 5.88L7.44 4.44C5.36 5.88 4 8.28 4 11C4 13.1217 4.84285 15.1566 6.34315 16.6569C7.84344 18.1571 9.87827 19 12 19C14.1217 19 16.1566 18.1571 17.6569 16.6569C19.1571 15.1566 20 13.1217 20 11C20 8.28 18.64 5.88 16.56 4.44ZM13 2H11V12H13V2ZM11 24H13V22H11V24ZM7 24H9V22H7V24Z" />
    </Svg>
  );
};
