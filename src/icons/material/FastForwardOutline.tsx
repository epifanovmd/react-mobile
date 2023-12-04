import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FastForwardOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 9.9L18 12L15 14.1V9.9ZM6 9.9L9 12L6 14.1V9.9ZM13 6V18L21.5 12L13 6ZM4 6V18L12.5 12L4 6Z" />
    </Svg>
  );
};
