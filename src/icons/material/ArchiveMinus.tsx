import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArchiveMinusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 13C19.34 13 19.67 13.04 20 13.09V8H4V21H13.35C13.13 20.37 13 19.7 13 19C13 15.69 15.69 13 19 13ZM9 13V11.5C9 11.22 9.22 11 9.5 11H14.5C14.78 11 15 11.22 15 11.5V13H9ZM21 7H3V3H21V7ZM23 18V20H15V18H23Z" />
    </Svg>
  );
};
