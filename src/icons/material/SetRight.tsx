import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SetRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 19C13.96 19 12.94 18.76 12 18.32C11.06 18.76 10.04 19 9 19C7.14348 19 5.36301 18.2625 4.05025 16.9497C2.7375 15.637 2 13.8565 2 12C2 10.1435 2.7375 8.36301 4.05025 7.05025C5.36301 5.7375 7.14348 5 9 5C10.04 5 11.06 5.24 12 5.68C12.94 5.24 13.96 5 15 5C16.8565 5 18.637 5.7375 19.9497 7.05025C21.2625 8.36301 22 10.1435 22 12C22 13.8565 21.2625 15.637 19.9497 16.9497C18.637 18.2625 16.8565 19 15 19ZM9 17L10 16.89C8.72 15.59 8 13.83 8 12C8 10.17 8.72 8.41 10 7.1L9 7C7.67392 7 6.40215 7.52678 5.46447 8.46447C4.52678 9.40215 4 10.6739 4 12C4 13.3261 4.52678 14.5979 5.46447 15.5355C6.40215 16.4732 7.67392 17 9 17ZM12 16C13.26 15.05 14 13.57 14 12C14 10.43 13.26 8.95 12 8C10.74 8.95 10 10.43 10 12C10 13.57 10.74 15.05 12 16Z" />
    </Svg>
  );
};
