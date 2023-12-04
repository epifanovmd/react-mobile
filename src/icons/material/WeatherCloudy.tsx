import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherCloudyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M6 19C5.34339 19 4.69321 18.8707 4.08658 18.6194C3.47995 18.3681 2.92876 17.9998 2.46447 17.5355C1.52678 16.5979 1 15.3261 1 14C1 12.6739 1.52678 11.4021 2.46447 10.4645C3.40215 9.52678 4.67392 9 6 9C7 6.65 9.3 5 12 5C15.43 5 18.24 7.66 18.5 11.03L19 11C20.0609 11 21.0783 11.4214 21.8284 12.1716C22.5786 12.9217 23 13.9391 23 15C23 16.0609 22.5786 17.0783 21.8284 17.8284C21.0783 18.5786 20.0609 19 19 19H6ZM19 13H17V12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7C9.5 7 7.45 8.82 7.06 11.19C6.73 11.07 6.37 11 6 11C5.20435 11 4.44129 11.3161 3.87868 11.8787C3.31607 12.4413 3 13.2044 3 14C3 14.7956 3.31607 15.5587 3.87868 16.1213C4.44129 16.6839 5.20435 17 6 17H19C19.5304 17 20.0391 16.7893 20.4142 16.4142C20.7893 16.0391 21 15.5304 21 15C21 14.4696 20.7893 13.9609 20.4142 13.5858C20.0391 13.2107 19.5304 13 19 13Z" />
    </Svg>
  );
};
