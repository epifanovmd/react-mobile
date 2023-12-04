import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SortNumericAscendingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 17H22L18 21L14 17H17V3H19V17ZM9 13H7C5.9 13 5 13.9 5 15V16C5 17.11 5.9 18 7 18H9V19H5V21H9C10.11 21 11 20.11 11 19V15C11 13.9 10.11 13 9 13ZM9 16H7V15H9V16ZM9 3H7C5.9 3 5 3.9 5 5V9C5 10.11 5.9 11 7 11H9C10.11 11 11 10.11 11 9V5C11 3.9 10.11 3 9 3ZM9 9H7V5H9V9Z" />
    </Svg>
  );
};
