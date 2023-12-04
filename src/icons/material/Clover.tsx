import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CloverIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 11.18C15.3 8.18 17 6.64 17 4.69C17 3.19 15.75 2 14.25 2C13.39 2 12.57 2.36 12 3C11.43 2.36 10.61 2 9.69 2C8.19 2 7 3.25 7 4.75C7 6.64 8.7 8.18 12 11.18ZM11.18 12C8.18 8.7 6.64 7 4.69 7C3.19 7 2 8.25 2 9.75C2 10.61 2.36 11.43 3 12C2.36 12.57 2 13.39 2 14.31C2 15.81 3.25 17 4.75 17C6.64 17 8.18 15.3 11.18 12ZM12.83 12C15.82 15.3 17.36 17 19.31 17C20.81 17 22 15.75 22 14.25C22 13.39 21.64 12.57 21 12C21.64 11.43 22 10.61 22 9.69C22 8.19 20.75 7 19.25 7C17.36 7 15.82 8.7 12.83 12ZM12 12.82C8.7 15.82 7 17.36 7 19.31C7 20.81 8.25 22 9.75 22C10.61 22 11.43 21.64 12 21C12.57 21.64 13.39 22 14.31 22C15.81 22 17 20.75 17 19.25C17 17.36 15.3 15.82 12 12.82Z" />
    </Svg>
  );
};
