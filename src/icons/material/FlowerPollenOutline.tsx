import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FlowerPollenOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11 6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6C13 6.55 12.55 7 12 7C11.45 7 11 6.55 11 6ZM8 9C8.55 9 9 8.55 9 8C9 7.45 8.55 7 8 7C7.45 7 7 7.45 7 8C7 8.55 7.45 9 8 9ZM6 5C6 4.45 5.55 4 5 4C4.45 4 4 4.45 4 5C4 5.55 4.45 6 5 6C5.55 6 6 5.55 6 5ZM9 4C9.55 4 10 3.55 10 3C10 2.45 9.55 2 9 2C8.45 2 8 2.45 8 3C8 3.55 8.45 4 9 4ZM15 4C15.55 4 16 3.55 16 3C16 2.45 15.55 2 15 2C14.45 2 14 2.45 14 3C14 3.55 14.45 4 15 4ZM19 4C18.45 4 18 4.45 18 5C18 5.55 18.45 6 19 6C19.55 6 20 5.55 20 5C20 4.45 19.55 4 19 4ZM15 8C15 8.55 15.45 9 16 9C16.55 9 17 8.55 17 8C17 7.45 16.55 7 16 7C15.45 7 15 7.45 15 8ZM18.5 13.07C18.5 13.78 18.24 14.46 17.81 15C18.23 15.54 18.5 16.22 18.5 16.93C18.5 18.66 17.07 20.07 15.34 20.07L14.91 20.04C14.44 21.19 13.31 22 12 22C10.69 22 9.56 21.19 9.09 20.04L8.66 20.07C6.92 20.07 5.5 18.66 5.5 16.93C5.5 16.22 5.76 15.54 6.19 15C5.77 14.46 5.5 13.78 5.5 13.07C5.5 11.34 6.93 9.93 8.66 9.93L9.09 9.96C9.56 8.81 10.69 8 12 8C13.31 8 14.44 8.81 14.91 9.96L15.34 9.93C17.07 9.93 18.5 11.34 18.5 13.07ZM7.5 13.07C7.5 13.5 7.77 13.9 8.17 14.1L9.05 14.5C9.17 13.78 9.56 13.14 10.11 12.69L9.3 12.13C9.12 12 8.9 11.93 8.66 11.93C8.03 11.93 7.5 12.44 7.5 13.07ZM10.12 17.31C9.56 16.86 9.17 16.22 9.05 15.5L8.17 15.9C7.77 16.1 7.5 16.5 7.5 16.92C7.5 17.55 8.03 18.06 8.66 18.06C8.89 18.06 9.11 18 9.31 17.86L10.12 17.31ZM13.14 18.9L13.03 17.81C12.71 17.93 12.36 18 12 18C11.64 18 11.3 17.93 11 17.81L10.86 18.9C10.88 19.5 11.38 20 12 20C12.62 20 13.12 19.5 13.14 18.9ZM13.14 11.1C13.12 10.5 12.62 10 12 10C11.38 10 10.88 10.5 10.86 11.1L11 12.19C11.3 12.07 11.64 12 12 12C12.36 12 12.71 12.07 13.03 12.19L13.14 11.1ZM16.5 16.92C16.5 16.5 16.23 16.08 15.83 15.89L14.95 15.47C14.83 16.21 14.44 16.85 13.89 17.3L14.7 17.87C14.88 18 15.1 18.07 15.34 18.07C15.97 18.07 16.5 17.56 16.5 16.92ZM16.5 13.07C16.5 12.44 15.97 11.93 15.34 11.93C15.11 11.93 14.89 12 14.69 12.13L13.87 12.69C14.43 13.14 14.82 13.78 14.94 14.5L15.82 14.1C16.23 13.9 16.5 13.5 16.5 13.07Z" />
    </Svg>
  );
};