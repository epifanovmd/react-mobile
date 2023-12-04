import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AutoUploadIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M5.35005 12.65L6.50005 9L7.65005 12.65H5.35005ZM5.50005 7L2.30005 16H4.20005L4.90005 14H8.10005L8.80005 16H10.7L7.50005 7H5.50005ZM11 20H22V18H11V20ZM14 16H19V11H22L16.5 5.5L11 11H14V16Z" />
    </Svg>
  );
};
