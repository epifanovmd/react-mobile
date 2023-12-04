import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ViewGridPlusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 21H11V13H3V21ZM5 15H9V19H5V15ZM3 11H11V3H3V11ZM5 5H9V9H5V5ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM18 16H21V18H18V21H16V18H13V16H16V13H18V16Z" />
    </Svg>
  );
};
