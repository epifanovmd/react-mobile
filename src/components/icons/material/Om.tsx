import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const OmIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 2L13.5 3.5L15 5L16.5 3.5L15 2ZM11 3C10 9 17 10 20 6L18 4.5C17 6 13 8 11 3ZM9.00005 7C7.00005 7 4.50005 8.5 4.50005 8.5L6.00005 11C7.00005 10 9.00005 9.5 10 10C12 11 9.00005 13 7.00005 12V15.5C10 14 12 16 11 17.5C8.00005 22 3.00005 16 3.00005 13C1.00005 19 6.00005 22 9.00005 22C12 22 14 20 12.5 15H14C12.5 19.5 18 24 21 18C22 16 22 9.5 17 9.5C13 9.5 14 15 10.5 13.5C14 10 12 7 9.00005 7ZM19 12C22 15 15 21 15 15C15 13 17 10.5 19 12Z" />
    </Svg>
  );
};
