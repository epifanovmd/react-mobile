import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SortBoolDescendingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 7H22L18 3L14 7H17V21H19V7ZM5 7C5 8.1 5.9 9 7 9C8.1 9 9 8.1 9 7C9 5.9 8.1 5 7 5C5.9 5 5 5.9 5 7ZM7 3C9.21 3 11 4.79 11 7C11 9.21 9.21 11 7 11C4.79 11 3 9.21 3 7C3 4.79 4.79 3 7 3ZM7 13C4.79 13 3 14.79 3 17C3 19.21 4.79 21 7 21C9.21 21 11 19.21 11 17C11 14.79 9.21 13 7 13Z" />
    </Svg>
  );
};
