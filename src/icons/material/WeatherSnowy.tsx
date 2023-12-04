import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherSnowyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M6 14C6.26522 14 6.51957 14.1054 6.70711 14.2929C6.89464 14.4804 7 14.7348 7 15C7 15.2652 6.89464 15.5196 6.70711 15.7071C6.51957 15.8946 6.26522 16 6 16C5.34339 16 4.69321 15.8707 4.08658 15.6194C3.47995 15.3681 2.92876 14.9998 2.46447 14.5355C1.52678 13.5979 1 12.3261 1 11C1 9.67392 1.52678 8.40215 2.46447 7.46447C3.40215 6.52678 4.67392 6 6 6C7 3.65 9.3 2 12 2C15.43 2 18.24 4.66 18.5 8.03L19 8C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18C17.7348 16 17.4804 15.8946 17.2929 15.7071C17.1054 15.5196 17 15.2652 17 15C17 14.7348 17.1054 14.4804 17.2929 14.2929C17.4804 14.1054 17.7348 14 18 14H19C19.5304 14 20.0391 13.7893 20.4142 13.4142C20.7893 13.0391 21 12.5304 21 12C21 11.4696 20.7893 10.9609 20.4142 10.5858C20.0391 10.2107 19.5304 10 19 10H17V9C17 7.67392 16.4732 6.40215 15.5355 5.46447C14.5979 4.52678 13.3261 4 12 4C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8C5.20435 8 4.44129 8.31607 3.87868 8.87868C3.31607 9.44129 3 10.2044 3 11C3 11.7956 3.31607 12.5587 3.87868 13.1213C4.44129 13.6839 5.20435 14 6 14ZM7.88 18.07L10.07 17.5L8.46 15.88C8.07 15.5 8.07 14.86 8.46 14.46C8.85 14.07 9.5 14.07 9.88 14.46L11.5 16.07L12.07 13.88C12.21 13.34 12.76 13.03 13.29 13.17C13.83 13.31 14.14 13.86 14 14.4L13.41 16.59L15.6 16C16.14 15.86 16.69 16.17 16.83 16.71C16.97 17.24 16.66 17.79 16.12 17.93L13.93 18.5L15.54 20.12C15.93 20.5 15.93 21.15 15.54 21.54C15.15 21.93 14.5 21.93 14.12 21.54L12.5 19.93L11.93 22.12C11.79 22.66 11.24 22.97 10.71 22.83C10.17 22.69 9.86 22.14 10 21.6L10.59 19.41L8.4 20C7.86 20.14 7.31 19.83 7.17 19.29C7.03 18.76 7.34 18.21 7.88 18.07Z" />
    </Svg>
  );
};