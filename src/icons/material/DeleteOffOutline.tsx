import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DeleteOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 5.27L3.28 4L5 5.72L5.28 6L6.28 7L8.28 9L16 16.72L18 18.72L20 20.72L18.73 22L17.27 20.54C16.93 20.83 16.5 21 16 21H8C6.9 21 6 20.1 6 19V9.27L2 5.27ZM8 19H15.73L8 11.27V19ZM18 7V16.18L16 14.18V9H10.82L8.82 7H18ZM15.5 4H19V6H7.82L5.82 4H8.5L9.5 3H14.5L15.5 4Z" />
    </Svg>
  );
};
