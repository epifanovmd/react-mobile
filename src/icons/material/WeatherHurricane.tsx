import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherHurricaneIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 6.79C16.86 7.86 18 9.85 18 12C18 22 6 22 6 22C7.25 21.06 8.38 19.95 9.34 18.71C9.38 18.66 9.41 18.61 9.44 18.55C9.69 18.06 9.5 17.46 9 17.21C7.14 16.14 6 14.15 6 12C6 2 18 2 18 2C16.75 2.94 15.62 4.05 14.66 5.29C14.62 5.34 14.59 5.39 14.56 5.45C14.31 5.94 14.5 6.54 15 6.79ZM12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z" />
    </Svg>
  );
};
