import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableStarIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 3H18C19.11 3 20 3.9 20 5V12.08C18.45 11.82 16.92 12.18 15.68 13H12V17H13.08C12.97 17.68 12.97 18.35 13.08 19H4C2.9 19 2 18.11 2 17V5C2 3.9 2.9 3 4 3ZM4 7V11H10V7H4ZM12 7V11H18V7H12ZM4 13V17H10V13H4ZM16.5 21.6L17.2 18.8L15 16.9L17.9 16.7L19 14L20.1 16.6L23 16.8L20.8 18.7L21.5 21.5L19 20.1L16.5 21.6Z" />
    </Svg>
  );
};