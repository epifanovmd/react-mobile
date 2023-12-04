import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SassIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2ZM10 15.33C10.16 15.87 10.14 16.37 10 16.83C10 16.88 9.96 16.93 9.94 17C9.92 17 9.9 17.07 9.87 17.12C9.76 17.36 9.6 17.59 9.41 17.79C8.83 18.43 8 18.67 7.67 18.47C7.29 18.25 7.5 17.35 8.16 16.64C8.88 15.88 9.92 15.38 9.92 15.38L10 15.33ZM18.27 6.28C17.82 4.5 14.87 3.92 12.09 4.91C10.43 5.5 8.63 6.42 7.34 7.63C5.81 9.07 5.56 10.32 5.66 10.84C6 12.68 8.54 13.89 9.58 14.78V14.79C9.28 14.94 7.04 16.07 6.5 17.23C5.96 18.45 6.6 19.33 7 19.45C8.34 19.81 9.69 19.16 10.41 18.07C11.11 17.03 11.06 15.68 10.75 15C11.17 14.9 11.66 14.85 12.28 14.92C14.04 15.13 14.38 16.22 14.31 16.68C14.25 17.14 13.88 17.39 13.76 17.47C13.64 17.54 13.6 17.57 13.61 17.63C13.62 17.71 13.68 17.71 13.78 17.69C13.93 17.66 14.71 17.32 14.74 16.47C14.78 15.39 13.75 14.19 11.93 14.22C11.18 14.24 10.71 14.31 10.37 14.44L10.29 14.35C9.16 13.15 7.08 12.3 7.17 10.68C7.2 10.09 7.4 8.55 11.17 6.67C14.25 5.13 16.72 5.55 17.15 6.5C17.76 7.83 15.83 10.32 12.63 10.68C11.41 10.82 10.76 10.34 10.6 10.17C10.43 10 10.41 9.97 10.35 10C10.24 10.07 10.31 10.23 10.35 10.33C10.44 10.58 10.84 11 11.5 11.24C12.09 11.43 13.53 11.54 15.26 10.87C17.2 10.12 18.72 8.03 18.27 6.28Z" />
    </Svg>
  );
};
