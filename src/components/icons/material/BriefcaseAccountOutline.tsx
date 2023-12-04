import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BriefcaseAccountOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 6C20.58 6 21.05 6.2 21.42 6.59C21.8 7 22 7.45 22 8V19C22 19.55 21.8 20 21.42 20.41C21.05 20.8 20.58 21 20 21H4C3.42 21 2.95 20.8 2.58 20.41C2.2 20 2 19.55 2 19V8C2 7.45 2.2 7 2.58 6.59C2.95 6.2 3.42 6 4 6H8V4C8 3.42 8.2 2.95 8.58 2.58C8.95 2.2 9.42 2 10 2H14C14.58 2 15.05 2.2 15.42 2.58C15.8 2.95 16 3.42 16 4V6H20ZM4 8V19H20V8H4ZM14 6V4H10V6H14ZM12 9C12.5967 9 13.169 9.23705 13.591 9.65901C14.0129 10.081 14.25 10.6533 14.25 11.25C14.25 12.5 13.24 13.5 12 13.5C11.4033 13.5 10.831 13.2629 10.409 12.841C9.98705 12.419 9.75 11.8467 9.75 11.25C9.75 10 10.76 9 12 9ZM16.5 18H7.5V16.88C7.5 15.63 9.5 14.63 12 14.63C14.5 14.63 16.5 15.63 16.5 16.88V18Z" />
    </Svg>
  );
};
