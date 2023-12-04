import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PoundIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M5.41012 21L6.12012 17H2.12012L2.47012 15H6.47012L7.53012 9H3.53012L3.88012 7H7.88012L8.59012 3H10.5901L9.88012 7H15.8801L16.5901 3H18.5901L17.8801 7H21.8801L21.5301 9H17.5301L16.4701 15H20.4701L20.1201 17H16.1201L15.4101 21H13.4101L14.1201 17H8.12012L7.41012 21H5.41012ZM9.53012 9L8.47012 15H14.4701L15.5301 9H9.53012Z" />
    </Svg>
  );
};
