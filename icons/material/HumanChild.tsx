import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HumanChildIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C12.7956 2 13.5587 2.31607 14.1213 2.87868C14.6839 3.44129 15 4.20435 15 5C15 5.79565 14.6839 6.55871 14.1213 7.12132C13.5587 7.68393 12.7956 8 12 8C11.2044 8 10.4413 7.68393 9.87868 7.12132C9.31607 6.55871 9 5.79565 9 5C9 4.20435 9.31607 3.44129 9.87868 2.87868C10.4413 2.31607 11.2044 2 12 2ZM11 22H8V16H6V9H18V16H16V22H13V18H11V22Z" />
    </Svg>
  );
};
