import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SelectionRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 20V17H22V20C22 21.11 21.1 22 20 22H17V20H20ZM2 20V17H4V20H7V22H4C2.9 22 2 21.1 2 20ZM10 20H14V22H10V20ZM14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8ZM20 10H22V14H20V10ZM2 10H4V14H2V10ZM2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4ZM22 4V7H20V4H17V2H20C21.1 2 22 2.9 22 4ZM10 2H14V4H10V2Z" />
    </Svg>
  );
};
