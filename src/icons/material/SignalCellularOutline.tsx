import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SignalCellularOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.5 5.5V18.5H17.5V5.5H19.5ZM12.5 10.5V18.5H10.5V10.5H12.5ZM5.5 15.5V18.5H3.5V15.5H5.5ZM21 4H16V20H21V4ZM14 9H9V20H14V9ZM7 14H2V20H7V14Z" />
    </Svg>
  );
};
