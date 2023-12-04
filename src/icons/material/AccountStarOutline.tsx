import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountStarOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 4C16.0609 4 17.0783 4.42143 17.8284 5.17157C18.5786 5.92172 19 6.93913 19 8C19 9.06087 18.5786 10.0783 17.8284 10.8284C17.0783 11.5786 16.0609 12 15 12C13.9391 12 12.9217 11.5786 12.1716 10.8284C11.4214 10.0783 11 9.06087 11 8C11 6.93913 11.4214 5.92172 12.1716 5.17157C12.9217 4.42143 13.9391 4 15 4ZM15 5.9C14.443 5.9 13.9089 6.12125 13.5151 6.51508C13.1212 6.9089 12.9 7.44305 12.9 8C12.9 8.55695 13.1212 9.0911 13.5151 9.48492C13.9089 9.87875 14.443 10.1 15 10.1C16.16 10.1 17.1 9.16 17.1 8C17.1 6.84 16.16 5.9 15 5.9ZM15 13C17.67 13 23 14.33 23 17V20H7V17C7 14.33 12.33 13 15 13ZM15 14.9C12 14.9 8.9 16.36 8.9 17V18.1H21.1V17C21.1 16.36 17.97 14.9 15 14.9ZM5 13.28L2.5 14.77L3.18 11.96L1 10.08L3.87 9.83L5 7.19L6.11 9.83L9 10.08L6.8 11.96L7.45 14.77L5 13.28Z" />
    </Svg>
  );
};
