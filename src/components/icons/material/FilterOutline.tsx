import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FilterOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.0001 19.88C15.0401 20.18 14.9401 20.5 14.7101 20.71C14.3201 21.1 13.6901 21.1 13.3001 20.71L9.2901 16.7C9.0601 16.47 8.9601 16.16 9.0001 15.87V10.75L4.2101 4.62C3.8701 4.19 3.9501 3.56 4.3801 3.22C4.5701 3.08 4.7801 3 5.0001 3H19.0001C19.2201 3 19.4301 3.08 19.6201 3.22C20.0501 3.56 20.1301 4.19 19.7901 4.62L15.0001 10.75V19.88ZM7.0401 5L11.0001 10.06V15.58L13.0001 17.58V10.05L16.9601 5H7.0401Z" />
    </Svg>
  );
};
