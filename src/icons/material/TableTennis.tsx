import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableTennisIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18.5 14C19.9 14 21 15.1 21 16.5C21 17.9 19.9 19 18.5 19C17.1 19 16 17.9 16 16.5C16 15.1 17.1 14 18.5 14ZM7 15C7 15 8 16 8 17V20.5C8 21.3 8.7 22 9.5 22C10.3 22 11 21.3 11 20.5V17C11 16 12 15 12 15H7ZM8 14H11C11 14 16 14 16 9C16 4 12 2 9.5 2C7 2 3 4 3 9C3 14 8 14 8 14Z" />
    </Svg>
  );
};
