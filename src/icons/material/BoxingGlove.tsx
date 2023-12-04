import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BoxingGloveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 16V6H22V16H19ZM12 4C8 4 7 4 7 4C7 4 2 4 2 8V14C2 15.77 3 16.76 4.07 17.31C4.4 15.43 6.03 14 8 14H11V16H8C7.46957 16 6.96086 16.2107 6.58579 16.5858C6.21071 16.9609 6 17.4696 6 18C6 19.11 6.9 20 8 20H13C17 20 17 16 17 16V6C17 6 16 4 12 4Z" />
    </Svg>
  );
};
