import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BookmarkOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3.28 4L2 5.27L5 8.27V21L12 18L16.78 20.05L18.73 22L20 20.72L3.28 4ZM7 18V10.27L13 16.25L12 15.82L7 18ZM7 5.16L5.5 3.67C5.88 3.26 6.41 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V17.16L17 15.16V5H7V5.16Z" />
    </Svg>
  );
};
