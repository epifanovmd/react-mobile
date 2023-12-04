import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PoloIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22 9.5C22 10.88 20.88 12 19.5 12C18.12 12 17 10.88 17 9.5C17 8.12 18.12 7 19.5 7C20.88 7 22 8.12 22 9.5ZM11 17V3H8V17H2L6 21H13V17H11ZM16 17H14V21H16V17Z" />
    </Svg>
  );
};
