import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CashMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M5 6H23V18H5V6ZM14 9C14.7956 9 15.5587 9.31607 16.1213 9.87868C16.6839 10.4413 17 11.2044 17 12C17 12.7956 16.6839 13.5587 16.1213 14.1213C15.5587 14.6839 14.7956 15 14 15C13.2044 15 12.4413 14.6839 11.8787 14.1213C11.3161 13.5587 11 12.7956 11 12C11 11.2044 11.3161 10.4413 11.8787 9.87868C12.4413 9.31607 13.2044 9 14 9ZM9 8C9 8.53043 8.78929 9.03914 8.41421 9.41421C8.03914 9.78929 7.53043 10 7 10V14C7.53043 14 8.03914 14.2107 8.41421 14.5858C8.78929 14.9609 9 15.4696 9 16H19C19 15.4696 19.2107 14.9609 19.5858 14.5858C19.9609 14.2107 20.4696 14 21 14V10C20.4696 10 19.9609 9.78929 19.5858 9.41421C19.2107 9.03914 19 8.53043 19 8H9ZM1 10H3V20H19V22H1V10Z" />
    </Svg>
  );
};
