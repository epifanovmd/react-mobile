import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PowerSocketAuIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4.22 2C3.63122 2 3.06655 2.23389 2.65022 2.65022C2.23389 3.06655 2 3.63122 2 4.22V19.78C2 21 3 22 4.22 22H19.78C20.3688 22 20.9334 21.7661 21.3498 21.3498C21.7661 20.9334 22 20.3688 22 19.78V4.22C22 3 21 2 19.78 2H4.22ZM12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4ZM8.27 7.54L6.27 11L8 12L10 8.54L8.27 7.54ZM15.73 7.54L14 8.54L16 12L17.73 11L15.73 7.54ZM11 14V18H13V14H11Z" />
    </Svg>
  );
};
