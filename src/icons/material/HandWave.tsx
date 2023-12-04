import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandWaveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M23 17C23 20.31 20.31 23 17 23V21.5C19.5 21.5 21.5 19.5 21.5 17H23ZM0.999995 7C0.999995 3.69 3.69 1 7 1V2.5C4.5 2.5 2.49999 4.5 2.49999 7H0.999995ZM8 4.32L3.41 8.92C0.189995 12.14 0.189995 17.37 3.41 20.59C6.63 23.81 11.86 23.81 15.08 20.59L22.15 13.5C22.64 13.03 22.64 12.24 22.15 11.75C21.66 11.26 20.87 11.26 20.38 11.75L15.96 16.17L15.25 15.46L21.79 8.92C22.28 8.43 22.28 7.64 21.79 7.15C21.3 6.66 20.5 6.66 20 7.15L14.19 13L13.5 12.27L20.37 5.38C20.86 4.89 20.86 4.1 20.37 3.61C19.88 3.12 19.09 3.12 18.6 3.61L11.71 10.5L11 9.8L16.5 4.32C17 3.83 17 3.04 16.5 2.55C16 2.06 15.22 2.06 14.73 2.55L7.11 10.17C8.33 11.74 8.22 14 6.78 15.45L6.07 14.74C7.24 13.57 7.24 11.67 6.07 10.5L5.72 10.15L9.79 6.08C10.28 5.59 10.28 4.8 9.79 4.31C9.29 3.83 8.5 3.83 8 4.32Z" />
    </Svg>
  );
};
