import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PatioHeaterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 22H9V21H15V22ZM19 4L15 2H9L5 4H19ZM8 5L8.4 6H15.6L16 5H8ZM10 10H11V15C10.4 15 10 15.4 10 16V20H14V16C14 15.4 13.6 15 13 15V10H14L14.4 9H9.6L10 10ZM9.2 8H14.8L15.2 7H8.8L9.2 8Z" />
    </Svg>
  );
};
