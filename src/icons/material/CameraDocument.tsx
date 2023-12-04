import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CameraDocumentIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 7V22H3V20H19V7H14.72C14.38 7.6 13.74 8 13 8C13 9.11 12.1 10 11 10H8C6.9 10 6 9.1 6 8V4C6 2.9 6.9 2 8 2H11C12.1 2 13 2.9 13 4C13.74 4 14.38 4.41 14.72 5H19C20.11 5 21 5.89 21 7ZM6 15H13L11 11H8L6 15Z" />
    </Svg>
  );
};
