import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Dice4OutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3ZM7.5 6C6.67 6 6 6.67 6 7.5C6 8.33 6.67 9 7.5 9C8.33 9 9 8.33 9 7.5C9 6.67 8.33 6 7.5 6ZM16.5 15C15.67 15 15 15.67 15 16.5C15 17.33 15.67 18 16.5 18C17.33 18 18 17.33 18 16.5C18 15.67 17.33 15 16.5 15ZM16.5 6C15.67 6 15 6.67 15 7.5C15 8.33 15.67 9 16.5 9C17.33 9 18 8.33 18 7.5C18 6.67 17.33 6 16.5 6ZM7.5 15C6.67 15 6 15.67 6 16.5C6 17.33 6.67 18 7.5 18C8.33 18 9 17.33 9 16.5C9 15.67 8.33 15 7.5 15Z" />
    </Svg>
  );
};
