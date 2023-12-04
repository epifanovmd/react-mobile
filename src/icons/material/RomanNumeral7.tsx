import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RomanNumeral7Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 7L6 17H8L10 7H8L7 12L6 7H4ZM15 7V9H14V15H15V17H11V15H12V9H11V7H15ZM20 7V9H19V15H20V17H16V15H17V9H16V7H20Z" />
    </Svg>
  );
};