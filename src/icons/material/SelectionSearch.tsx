import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SelectionSearchIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.27 18.9C19.7 18.21 19.95 17.38 19.95 16.5C19.95 14 17.95 12 15.46 12C12.97 12 10.96 14 10.96 16.5C10.96 19 12.96 21 15.46 21C16.33 21 17.15 20.75 17.84 20.32L20.96 23.39L22.35 22L19.27 18.9ZM15.46 19C14.07 19 12.96 17.88 12.96 16.5C12.96 15.12 14.07 14 15.46 14C16.85 14 17.95 15.12 17.95 16.5C17.95 17.88 16.84 19 15.46 19ZM22 14H21.45C21.12 13.19 20.62 12.47 20 11.86V10H22V14ZM20 4H17V2H20C21.11 2 22 2.9 22 4V7H20V4ZM14 4H10V2H14V4ZM4 2H7V4H4V7H2V4C2 2.89 2.9 2 4 2ZM12 22H10V20C10.5 20.82 11.2 21.5 12 22ZM4 20H7V22H4C2.9 22 2 21.11 2 20V17H4V20ZM4 14H2V10H4V14Z" />
    </Svg>
  );
};
