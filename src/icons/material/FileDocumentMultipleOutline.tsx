import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileDocumentMultipleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16 0H8C6.9 0 6 0.9 6 2V18C6 19.1 6.9 20 8 20H20C21.1 20 22 19.1 22 18V6L16 0ZM20 18H8V2H15V7H20V18ZM4 4V22H20V24H4C2.9 24 2 23.1 2 22V4H4ZM10 10V12H18V10H10ZM10 14V16H15V14H10Z" />
    </Svg>
  );
};
