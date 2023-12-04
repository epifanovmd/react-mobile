import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ThermostatBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 3.89 20.1 3 19 3H5ZM12 5C13.57 5 15 5.5 16.19 6.4L14 8.56C13.43 8.21 12.74 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.1 8.45 14.1 9.17 14.83L7.05 16.95C5.78 15.68 5 13.93 5 12C5 10.1435 5.7375 8.36301 7.05025 7.05025C8.36301 5.7375 10.1435 5 12 5ZM17.6 7.81C18.5 9 19 10.43 19 12C19 13.93 18.22 15.68 16.95 16.95L14.83 14.83C15.55 14.1 16 13.1 16 12C16 11.26 15.79 10.57 15.43 10L17.6 7.81Z" />
    </Svg>
  );
};
