import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FenceElectricIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 9V11H7V9H5V11H3V9H1V21H3V19H5V21H7V19H9V21H11V19H13V21H15V19H17V21H19V19H21V21H23V9H21V11H19V9H17V11H15V9H13V11H11V9H9ZM3 13H5V17H3V13ZM7 13H9V17H7V13ZM11 13H13V17H11V13ZM15 13H17V17H15V13ZM19 13H21V17H19V13ZM7 4H11V2L17 5H13V7L7 4Z" />
    </Svg>
  );
};
