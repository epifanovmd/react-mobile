import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BorderTopIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 13H17V11H15V13ZM19 21H21V19H19V21ZM11 9H13V7H11V9ZM15 21H17V19H15V21ZM19 17H21V15H19V17ZM3 5H21V3H3V5ZM19 13H21V11H19V13ZM19 9H21V7H19V9ZM11 17H13V15H11V17ZM3 9H5V7H3V9ZM3 13H5V11H3V13ZM3 21H5V19H3V21ZM3 17H5V15H3V17ZM11 21H13V19H11V21ZM11 13H13V11H11V13ZM7 13H9V11H7V13ZM7 21H9V19H7V21Z" />
    </Svg>
  );
};
