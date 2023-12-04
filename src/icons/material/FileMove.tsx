import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileMoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14 17H18V14L23 18.5L18 23V20H14V17ZM13 9H18.5L13 3.5V9ZM6 2H14L20 8V12.34C19.37 12.12 18.7 12 18 12C16.4087 12 14.8826 12.6321 13.7574 13.7574C12.6321 14.8826 12 16.4087 12 18C12 19.54 12.58 20.94 13.53 22H6C4.89 22 4 21.1 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2Z" />
    </Svg>
  );
};
