import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EggFriedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 4.5C14.17 4.5 14.58 5.07 15.5 6.32C15.88 6.85 16.32 7.44 16.94 8.06C17.43 8.55 17.86 8.93 18.21 9.24C19.3 10.19 19.5 10.36 19.5 12C19.5 14.93 19.5 15.38 17.94 16.94C16 18.86 15.38 19.5 13 19.5C11.88 19.5 11.5 19.18 10.89 18.69C10.27 18.19 9.43 17.5 8 17.5C4.96 17.5 4.5 14.05 4.5 12C4.5 10.65 5 8.91 6.47 8.42C8.25 7.83 9.2 6.71 9.96 5.81C10.75 4.88 11.11 4.5 12 4.5ZM12 3C9 3 9 6 6 7C3.88 7.71 3 10 3 12C3 15 4 19 8 19C10 19 10 21 13 21C16 21 17 20 19 18C21 16 21 15 21 12C21 9 20 9 18 7C16 5 16 3 12 3ZM12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 10C10.9 10 10 10.9 10 12H9C9 10.35 10.35 9 12 9V10Z" />
    </Svg>
  );
};
