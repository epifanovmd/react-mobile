import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileQuestionOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM15 13C15 14.89 12.75 15.07 12.75 16.76H11.25C11.25 14.32 13.5 14.5 13.5 13C13.5 12.18 12.83 11.5 12 11.5C11.17 11.5 10.5 12.18 10.5 13H9C9 11.35 10.34 10 12 10C13.66 10 15 11.35 15 13ZM12.75 17.5V19H11.25V17.5H12.75Z" />
    </Svg>
  );
};
