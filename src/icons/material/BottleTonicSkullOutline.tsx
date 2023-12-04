import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BottleTonicSkullOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 4H11L10 2H14L13 4ZM14 8V6H15V5H9V6H10V8C7.24 8 5 10.24 5 13V22H19V13C19 10.24 16.76 8 14 8ZM17 20H7V13C7 11.35 8.35 10 10 10H14C15.65 10 17 11.35 17 13V20ZM12 11C9.79 11 8 12.79 8 15C8 16 8.39 16.9 9 17.59V19H10.25V17.5H11.38V19H12.63V17.5H13.75V19H15V17.59C15.61 16.9 16 16 16 15C16 12.79 14.21 11 12 11ZM10.5 15C9.95 15 9.5 14.55 9.5 14C9.5 13.45 9.95 13 10.5 13C11.05 13 11.5 13.45 11.5 14C11.5 14.55 11.05 15 10.5 15ZM11.25 16.25L12 15L12.75 16.25H11.25ZM13.5 15C12.95 15 12.5 14.55 12.5 14C12.5 13.45 12.95 13 13.5 13C14.05 13 14.5 13.45 14.5 14C14.5 14.55 14.05 15 13.5 15Z" />
    </Svg>
  );
};
