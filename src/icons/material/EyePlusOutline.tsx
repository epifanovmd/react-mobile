import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EyePlusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C12.36 19.5 12.72 19.5 13.08 19.45C13.03 19.13 13 18.82 13 18.5C13 18.14 13.04 17.78 13.1 17.42C12.74 17.46 12.37 17.5 12 17.5C8.24 17.5 4.83 15.36 3.18 12C4.83 8.64 8.24 6.5 12 6.5C15.76 6.5 19.17 8.64 20.82 12C20.7 12.24 20.56 12.45 20.43 12.68C21.09 12.84 21.72 13.11 22.29 13.5C22.56 13 22.8 12.5 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM18 14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z" />
    </Svg>
  );
};
