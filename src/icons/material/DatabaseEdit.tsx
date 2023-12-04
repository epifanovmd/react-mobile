import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseEditIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 14V17C4 19 7.05 20.72 11 21V18.11L11.13 18C7.12 17.76 4 16.06 4 14ZM12 13C7.58 13 4 11.21 4 9V12C4 14.21 7.58 16 12 16C12.39 16 12.77 16 13.16 16L17 12.12C15.4 12.72 13.71 13 12 13ZM12 3C7.58 3 4 4.79 4 7C4 9.21 7.58 11 12 11C16.42 11 20 9.21 20 7C20 4.79 16.42 3 12 3ZM21 11.13C20.85 11.13 20.71 11.19 20.61 11.3L19.61 12.3L21.66 14.3L22.66 13.3C22.87 13.1 22.88 12.76 22.66 12.53L21.42 11.3C21.32 11.19 21.18 11.13 21.04 11.13H21ZM19.04 12.88L13 18.94V21H15.06L21.12 14.93L19.04 12.88Z" />
    </Svg>
  );
};
