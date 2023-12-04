import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RibbonIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13.41 19.31L16.59 22.5L18 21.07L14.83 17.9L13.41 19.31ZM15.54 11.53H15.53L12 15.07L8.47 11.53H8.46C7.56 10.63 7 9.38 7 8C7 6.67392 7.52678 5.40215 8.46447 4.46447C9.40215 3.52678 10.6739 3 12 3C13.3261 3 14.5979 3.52678 15.5355 4.46447C16.4732 5.40215 17 6.67392 17 8C17 9.38 16.44 10.63 15.54 11.53ZM16.9 13C18.2 11.73 19 9.96 19 8C19 6.14348 18.2625 4.36301 16.9497 3.05025C15.637 1.7375 13.8565 1 12 1C10.1435 1 8.36301 1.7375 7.05025 3.05025C5.7375 4.36301 5 6.14348 5 8C5 9.96 5.81 11.73 7.1 13L10.59 16.5L6 21.07L7.41 22.5L16.9 13Z" />
    </Svg>
  );
};
