import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FilterVariantPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 8H3V6H21V8ZM13.81 16H10V18H13.09C13.21 17.28 13.46 16.61 13.81 16ZM18 11H6V13H18V11ZM18 15V18H15V20H18V23H20V20H23V18H20V15H18Z" />
    </Svg>
  );
};
