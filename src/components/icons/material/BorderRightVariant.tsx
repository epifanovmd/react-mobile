import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BorderRightVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 5H13V3H11V5ZM15 5H17V3H15V5ZM15 21H17V19H15V21ZM19 21H21V3H19V21ZM3 9H5V7H3V9ZM3 17H5V15H3V17ZM3 13H5V11H3V13ZM11 21H13V19H11V21ZM3 21H5V19H3V21ZM7 5H9V3H7V5ZM3 5H5V3H3V5ZM7 21H9V19H7V21Z" />
    </Svg>
  );
};
