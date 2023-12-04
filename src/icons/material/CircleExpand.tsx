import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CircleExpandIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 4L20 8V4H16ZM20 16L16 20H20V16ZM8 20L4 16V20H8ZM4 8L8 4H4V8ZM16.95 7.05C14.22 4.32 9.78 4.32 7.05 7.05C4.32 9.78 4.32 14.22 7.05 16.95C9.78 19.68 14.22 19.68 16.95 16.95C19.68 14.22 19.68 9.79 16.95 7.05ZM15.85 15.85C13.72 18 10.28 18 8.15 15.85C6 13.72 6 10.28 8.15 8.15C10.28 6 13.72 6 15.85 8.15C18 10.28 18 13.72 15.85 15.85Z" />
    </Svg>
  );
};
