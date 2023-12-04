import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VirusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 0.5C11.03 0.5 10.25 1.28 10.25 2.25C10.25 2.84 10.55 3.37 11 3.68V5.08C10.1 5.21 9.26004 5.5 8.50004 5.94L7.39004 4.35C7.58004 3.83 7.53004 3.23 7.19004 2.75C6.84004 2.26 6.30004 2 5.75004 2C5.40004 2 5.05004 2.1 4.75004 2.32C3.96004 2.87 3.76004 3.96 4.32004 4.75C4.66004 5.24 5.20004 5.5 5.75004 5.5L6.93004 7.18C6.50004 7.61 6.16004 8.09 5.87004 8.62C5.67004 8.54 5.46004 8.5 5.25004 8.5C4.80004 8.5 4.35004 8.67 4.00004 9C3.33004 9.7 3.33004 10.8 4.00004 11.5C4.29004 11.77 4.64004 11.92 5.00004 12C5.00004 12.54 5.07004 13.06 5.18004 13.56L3.87004 13.91C3.56004 13.65 3.16004 13.5 2.75004 13.5C2.60004 13.5 2.44004 13.5 2.29004 13.56C1.36004 13.81 0.809036 14.77 1.06004 15.71C1.27004 16.5 2.00004 17 2.75004 17C2.90004 17 3.05004 17 3.21004 16.94C3.78004 16.78 4.21004 16.36 4.39004 15.84L5.90004 15.43C6.35004 16.22 6.95004 16.92 7.65004 17.5L6.55004 19.5C6.00004 19.58 5.50004 19.89 5.21004 20.42C4.75004 21.27 5.07004 22.33 5.92004 22.79C6.18004 22.93 6.47004 23 6.75004 23C7.37004 23 7.97004 22.67 8.29004 22.08C8.57004 21.56 8.56004 20.96 8.31004 20.47L9.38004 18.5C10.19 18.82 11.07 19 12 19C12.06 19 12.12 19 12.18 19C12.05 19.26 12 19.56 12 19.88C12.08 20.8 12.84 21.5 13.75 21.5C13.79 21.5 13.84 21.5 13.88 21.5C14.85 21.42 15.57 20.58 15.5 19.62C15.46 19.12 15.21 18.68 14.85 18.39C15.32 18.18 15.77 17.91 16.19 17.6L18.53 19.94C18.43 20.5 18.59 21.07 19 21.5C19.35 21.83 19.8 22 20.25 22C20.7 22 21.15 21.83 21.5 21.5C22.17 20.8 22.17 19.7 21.5 19C21.15 18.67 20.7 18.5 20.25 18.5C20.15 18.5 20.05 18.5 19.94 18.53L17.6 16.19C18.09 15.54 18.47 14.8 18.71 14H19.82C20.13 14.45 20.66 14.75 21.25 14.75C22.22 14.75 23 13.97 23 13C23 12.03 22.22 11.25 21.25 11.25C20.66 11.25 20.13 11.55 19.82 12H19C19 10.43 18.5 9 17.6 7.81L18.94 6.47C19.05 6.5 19.15 6.5 19.25 6.5C19.7 6.5 20.15 6.33 20.5 6C21.17 5.31 21.17 4.2 20.5 3.5C20.15 3.17 19.7 3 19.25 3C18.8 3 18.35 3.17 18 3.5C17.59 3.93 17.43 4.5 17.53 5.06L16.19 6.4C15.27 5.71 14.19 5.25 13 5.08V3.68C13.45 3.37 13.75 2.84 13.75 2.25C13.75 1.28 12.97 0.5 12 0.5ZM12 17C9.24004 17 7.00004 14.76 7.00004 12C7.00004 9.24 9.24004 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM10.5 9C9.67004 9 9.00004 9.67 9.00004 10.5C9.00004 11.33 9.67004 12 10.5 12C11.33 12 12 11.33 12 10.5C12 9.67 11.33 9 10.5 9ZM14 13C13.45 13 13 13.45 13 14C13 14.55 13.45 15 14 15C14.55 15 15 14.55 15 14C15 13.45 14.55 13 14 13Z" />
    </Svg>
  );
};
