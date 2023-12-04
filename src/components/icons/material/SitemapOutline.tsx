import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SitemapOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 16V13C21 11.89 20.11 11 19 11H13V8H15V2H9V8H11V11H5C3.89 11 3 11.89 3 13V16H1V22H7V16H5V13H11V16H9V22H15V16H13V13H19V16H17V22H23V16H21ZM11 4H13V6H11V4ZM5 20H3V18H5V20ZM13 20H11V18H13V20ZM21 20H19V18H21V20Z" />
    </Svg>
  );
};
