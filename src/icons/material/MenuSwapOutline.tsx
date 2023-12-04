import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MenuSwapOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 3.5L6 9.5V11H18V9.5L12 3.5ZM12 6.33L14.67 9H9.33L12 6.33ZM6 13V14.5L12 20.5L18 14.5V13H6ZM9.33 15H14.67L12 17.67L9.33 15Z" />
    </Svg>
  );
};
