import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FoodCroissantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 19L19 17L22 15V19ZM15 15L19 9L22 13L18 16L15 15ZM5 17L2 19V15L5 17ZM9 15L6 16L2 13L5 9L9 15ZM14 6L18 8L13 15H11L6 8L10 6H14Z" />
    </Svg>
  );
};
