import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilterCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.0001 12V19.88C12.0401 20.18 11.9401 20.5 11.7101 20.71C11.3201 21.1 10.6901 21.1 10.3001 20.71L8.2901 18.7C8.0601 18.47 7.9601 18.16 8.0001 17.87V12H7.9701L2.2101 4.62C1.8701 4.19 1.9501 3.56 2.3801 3.22C2.5701 3.08 2.7801 3 3.0001 3H17.0001C17.2201 3 17.4301 3.08 17.6201 3.22C18.0501 3.56 18.1301 4.19 17.7901 4.62L12.0301 12H12.0001ZM17.7501 21L15.0001 18L16.1601 16.84L17.7501 18.43L21.3401 14.84L22.5001 16.25L17.7501 21Z" />
    </Svg>
  );
};
