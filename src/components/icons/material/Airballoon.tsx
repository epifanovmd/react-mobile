import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AirballoonIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 23C10.4696 23 9.96086 22.7893 9.58579 22.4142C9.21071 22.0391 9 21.5304 9 21V19H15V21C15 21.5304 14.7893 22.0391 14.4142 22.4142C14.0391 22.7893 13.5304 23 13 23H11ZM12 1C12.71 1 13.39 1.09 14.05 1.26C15.22 2.83 16 5.71 16 9C16 11.28 15.62 13.37 15 16C15 16.5304 14.7893 17.0391 14.4142 17.4142C14.0391 17.7893 13.5304 18 13 18H11C10.4696 18 9.96086 17.7893 9.58579 17.4142C9.21071 17.0391 9 16.5304 9 16C8.38 13.37 8 11.28 8 9C8 5.71 8.78 2.83 9.95 1.26C10.61 1.09 11.29 1 12 1ZM20 8C20 11.18 18.15 15.92 15.46 17.21C16.41 15.39 17 11.83 17 9C17 6.17 16.41 3.61 15.46 1.79C18.15 3.08 20 4.82 20 8ZM4 8C4 4.82 5.85 3.08 8.54 1.79C7.59 3.61 7 6.17 7 9C7 11.83 7.59 15.39 8.54 17.21C5.85 15.92 4 11.18 4 8Z" />
    </Svg>
  );
};
