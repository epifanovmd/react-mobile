import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FlagMinusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12.36 6L12.76 8H18V14H14.64L14.24 12H7V6H12.36ZM14 4H5V21H7V14H12.6L13 16H20V6H14.4L14 4ZM23 18H15V20H23V18Z" />
    </Svg>
  );
};
