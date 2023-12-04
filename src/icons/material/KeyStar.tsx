import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyStarIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7.5 3C5 3 3 5 3 7.5C3 10 5 12 7.5 12C9.5 12 11.1 10.8 11.7 9H15V12H18V9H21V6H11.7C11.1 4.2 9.5 3 7.5 3ZM7.5 6C8.3 6 9 6.7 9 7.5C9 8.3 8.3 9 7.5 9C6.7 9 6 8.3 6 7.5C6 6.7 6.7 6 7.5 6ZM12 14L10.9 16.6L8 16.9L10.2 18.8L9.5 21.6L12 20.1L14.4 21.6L13.8 18.8L16 16.9L13.1 16.7L12 14Z" />
    </Svg>
  );
};
