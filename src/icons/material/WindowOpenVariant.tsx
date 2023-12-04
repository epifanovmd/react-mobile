import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WindowOpenVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 20V2H3V20H1V23H23V20H21ZM19 4V11H17V4H19ZM5 4H7V11H5V4ZM5 20V13H7V20H5ZM9 20V4H15V20H9ZM17 20V13H19V20H17Z" />
    </Svg>
  );
};
