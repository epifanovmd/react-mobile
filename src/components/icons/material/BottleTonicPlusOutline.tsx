import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BottleTonicPlusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 4H11L10 2H14L13 4ZM19 13V22H5V13C5 10.24 7.24 8 10 8V6H9V5H15V6H14V8C16.76 8 19 10.24 19 13ZM17 13C17 11.35 15.65 10 14 10H10C8.35 10 7 11.35 7 13V20H17V13ZM15 16H13V18H11V16H9V14H11V12H13V14H15V16Z" />
    </Svg>
  );
};
