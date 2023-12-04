import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PopcornIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 22H4.75C4.75 22 4 22 3.81 20.65L2.04 3.81L2 3.5C2 2.67 2.9 2 4 2C5.1 2 6 2.67 6 3.5C6 2.67 6.9 2 8 2C9.1 2 10 2.67 10 3.5C10 2.67 10.9 2 12 2C13.09 2 14 2.66 14 3.5C14 2.67 14.9 2 16 2C17.1 2 18 2.67 18 3.5C18 2.67 18.9 2 20 2C21.1 2 22 2.67 22 3.5L21.96 3.81L20.19 20.65C20 22 19.25 22 19.25 22H17H16.5H13.75H10.25H7.5H7ZM17.85 4.93C17.55 4.39 16.84 4 16 4C15.19 4 14.36 4.36 14 4.87L13.78 20H16.66L17.85 4.93ZM10 4.87C9.64 4.36 8.81 4 8 4C7.16 4 6.45 4.39 6.15 4.93L7.34 20H10.22L10 4.87Z" />
    </Svg>
  );
};
