import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShieldAccountOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 3.18L19 6.3V11.22C19 12.92 18.5 14.65 17.65 16.17C16 14.94 13.26 14.5 12 14.5C10.74 14.5 8 14.94 6.35 16.17C5.5 14.65 5 12.92 5 11.22V6.3L12 3.18ZM12 6C11.0717 6 10.1815 6.36875 9.52513 7.02513C8.86875 7.6815 8.5 8.57174 8.5 9.5C8.5 10.4283 8.86875 11.3185 9.52513 11.9749C10.1815 12.6313 11.0717 13 12 13C12.9283 13 13.8185 12.6313 14.4749 11.9749C15.1313 11.3185 15.5 10.4283 15.5 9.5C15.5 8.57174 15.1313 7.6815 14.4749 7.02513C13.8185 6.36875 12.9283 6 12 6ZM12 8C12.3978 8 12.7794 8.15804 13.0607 8.43934C13.342 8.72064 13.5 9.10218 13.5 9.5C13.5 9.89782 13.342 10.2794 13.0607 10.5607C12.7794 10.842 12.3978 11 12 11C11.6022 11 11.2206 10.842 10.9393 10.5607C10.658 10.2794 10.5 9.89782 10.5 9.5C10.5 9.10218 10.658 8.72064 10.9393 8.43934C11.2206 8.15804 11.6022 8 12 8ZM12 16.5C13.57 16.5 15.64 17.11 16.53 17.84C15.29 19.38 13.7 20.55 12 21C10.3 20.55 8.71 19.38 7.47 17.84C8.37 17.11 10.43 16.5 12 16.5Z" />
    </Svg>
  );
};
