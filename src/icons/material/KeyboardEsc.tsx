import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KeyboardEscIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M1 7H7V9H3V11H7V13H3V15H7V17H1V7ZM11 7H15V9H11V11H13C14.11 11 15 11.9 15 13V15C15 16.11 14.11 17 13 17H9V15H13V13H11C9.9 13 9 12.11 9 11V9C9 7.9 9.9 7 11 7ZM19 7H21C22.11 7 23 7.9 23 9V10H21V9H19V15H21V14H23V15C23 16.11 22.11 17 21 17H19C17.9 17 17 16.11 17 15V9C17 7.9 17.9 7 19 7Z" />
    </Svg>
  );
};
