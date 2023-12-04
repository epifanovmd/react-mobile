import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SelectionMultipleMarkerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 4H9V6H8V7H6V5C6 4.45 6.45 4 7 4ZM19 4C19.55 4 20 4.45 20 5V7H18V6H17V4H19ZM11 6V4H15V6H11ZM7 18C6.45 18 6 17.55 6 17V15H8V16H9V18H7ZM6 9H8V13H6V9ZM3 8H4V20H14.58L16.03 22H3C2.45 22 2 21.55 2 21V9C2 8.45 2.45 8 3 8ZM18.5 12C20.4 12 22 13.6 22 15.5C22 18.1 18.5 22 18.5 22C18.5 22 15 18.1 15 15.5C15 13.6 16.6 12 18.5 12ZM18.5 16.8C19.2 16.8 19.8 16.2 19.7 15.6C19.7 15 19.1 14.4 18.5 14.4C17.9 14.4 17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8ZM11 18V16H13C13.09 16.66 13.27 17.33 13.5 18H11ZM20 9V10.23C19.5 10.08 19 10 18.5 10L18 10.03V9H20Z" />
    </Svg>
  );
};
