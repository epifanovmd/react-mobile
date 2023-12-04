import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SourceForkIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M6 2C6.79565 2 7.55871 2.31607 8.12132 2.87868C8.68393 3.44129 9 4.20435 9 5C9 6.28 8.19 7.38 7.06 7.81C7.15 8.27 7.39 8.83 8 9.63C9 10.92 11 12.83 12 14.17C13 12.83 15 10.92 16 9.63C16.61 8.83 16.85 8.27 16.94 7.81C15.81 7.38 15 6.28 15 5C15 4.20435 15.3161 3.44129 15.8787 2.87868C16.4413 2.31607 17.2044 2 18 2C18.7956 2 19.5587 2.31607 20.1213 2.87868C20.6839 3.44129 21 4.20435 21 5C21 6.32 20.14 7.45 18.95 7.85C18.87 8.37 18.64 9 18 9.83C17 11.17 15 13.08 14 14.38C13.39 15.17 13.15 15.73 13.06 16.19C14.19 16.62 15 17.72 15 19C15 19.7956 14.6839 20.5587 14.1213 21.1213C13.5587 21.6839 12.7956 22 12 22C11.2044 22 10.4413 21.6839 9.87868 21.1213C9.31607 20.5587 9 19.7956 9 19C9 17.72 9.81 16.62 10.94 16.19C10.85 15.73 10.61 15.17 10 14.38C9 13.08 7 11.17 6 9.83C5.36 9 5.13 8.37 5.05 7.85C3.86 7.45 3 6.32 3 5C3 4.20435 3.31607 3.44129 3.87868 2.87868C4.44129 2.31607 5.20435 2 6 2ZM6 4C5.73478 4 5.48043 4.10536 5.29289 4.29289C5.10536 4.48043 5 4.73478 5 5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5C7 4.73478 6.89464 4.48043 6.70711 4.29289C6.51957 4.10536 6.26522 4 6 4ZM18 4C17.7348 4 17.4804 4.10536 17.2929 4.29289C17.1054 4.48043 17 4.73478 17 5C17 5.26522 17.1054 5.51957 17.2929 5.70711C17.4804 5.89464 17.7348 6 18 6C18.2652 6 18.5196 5.89464 18.7071 5.70711C18.8946 5.51957 19 5.26522 19 5C19 4.73478 18.8946 4.48043 18.7071 4.29289C18.5196 4.10536 18.2652 4 18 4ZM12 18C11.7348 18 11.4804 18.1054 11.2929 18.2929C11.1054 18.4804 11 18.7348 11 19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19C13 18.7348 12.8946 18.4804 12.7071 18.2929C12.5196 18.1054 12.2652 18 12 18Z" />
    </Svg>
  );
};
