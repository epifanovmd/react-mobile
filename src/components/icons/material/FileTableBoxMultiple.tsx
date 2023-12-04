import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FileTableBoxMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 5V21H19V23H3C1.9 23 1 22.1 1 21V5H3ZM21 1H7C5.89 1 5 1.89 5 3V17C5 18.11 5.9 19 7 19H21C22.11 19 23 18.11 23 17V3C23 1.89 22.1 1 21 1ZM11 16H8V14H11V16ZM11 13H8V11H11V13ZM11 10H8V8H11V10ZM15 16H12V14H15V16ZM15 13H12V11H15V13ZM15 10H12V8H15V10Z" />
    </Svg>
  );
};
