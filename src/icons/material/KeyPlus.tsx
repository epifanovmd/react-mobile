import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7.5 3C9.5 3 11.1 4.2 11.7 6H21V9H18V12H15V9H11.7C11.1 10.8 9.4 12 7.5 12C5 12 3 10 3 7.5C3 5 5 3 7.5 3ZM7.5 6C6.7 6 6 6.7 6 7.5C6 8.3 6.7 9 7.5 9C8.3 9 9 8.3 9 7.5C9 6.7 8.3 6 7.5 6ZM8 17H11V14H13V17H16V19H13V22H11V19H8V17Z" />
    </Svg>
  );
};
