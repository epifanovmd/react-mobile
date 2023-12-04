import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BookmarkMinusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 11V9H15V11H9ZM19 5V21L12 18L5 21V5C5 3.89 5.9 3 7 3H17C18.11 3 19 3.9 19 5ZM17 5H7V18L12 15.82L17 18V5Z" />
    </Svg>
  );
};
