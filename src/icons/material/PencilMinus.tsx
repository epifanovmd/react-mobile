import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PencilMinusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.7 7C21.1 6.6 21.1 6 20.7 5.6L18.4 3.3C18 2.9 17.4 2.9 17 3.3L15.2 5.1L19 8.9L20.7 7ZM3 17.2V21H6.8L17.8 9.9L14.1 6.1L3 17.2ZM10 5V7H2V5H10Z" />
    </Svg>
  );
};