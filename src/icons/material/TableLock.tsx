import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableLockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 16V15.5C21 14.12 19.88 13 18.5 13C17.12 13 16 14.12 16 15.5V16C15.45 16 15 16.45 15 17V21C15 21.55 15.45 22 16 22H21C21.55 22 22 21.55 22 21V17C22 16.45 21.55 16 21 16ZM20 16H17V15.5C17 14.67 17.67 14 18.5 14C19.33 14 20 14.67 20 15.5V16ZM13 18H12V14H14.26C14.54 13.21 15.04 12.5 15.69 12H12V8H18V11.05C18.17 11.03 18.33 11 18.5 11C19.03 11 19.53 11.1 20 11.26V6C20 4.89 19.11 4 18 4H4C2.9 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H13V18ZM10 18H4V14H10V18ZM10 12H4V8H10V12Z" />
    </Svg>
  );
};
