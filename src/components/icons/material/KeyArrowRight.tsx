import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const KeyArrowRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.7 6C11.1 4.2 9.4 3 7.5 3C5 3 3 5 3 7.5C3 10 5 12 7.5 12C9.5 12 11.1 10.8 11.7 9H15V12H18V9H21V6H11.7ZM7.5 9C6.7 9 6 8.3 6 7.5C6 6.7 6.7 6 7.5 6C8.3 6 9 6.7 9 7.5C9 8.3 8.3 9 7.5 9ZM13 21V19H8V17H13V15L16 18L13 21Z" />
    </Svg>
  );
};
