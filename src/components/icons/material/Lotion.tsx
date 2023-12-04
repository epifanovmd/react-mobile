import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LotionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.5 6.5C15.5 5.66 17 4 17 4C17 4 18.5 5.66 18.5 6.5C18.5 7.33 17.83 8 17 8C16.17 8 15.5 7.33 15.5 6.5ZM19.5 15C20.88 15 22 13.88 22 12.5C22 10.83 19.5 8 19.5 8C19.5 8 17 10.83 17 12.5C17 13.88 18.12 15 19.5 15ZM16 12V22H4V12C4 9.03 6.16 6.57 9 6.09V4H7V2H13C14.13 2 15.15 2.39 16 3L14.56 4.44C14.1 4.17 13.57 4 13 4H11V6.09C13.84 6.57 16 9.03 16 12Z" />
    </Svg>
  );
};
