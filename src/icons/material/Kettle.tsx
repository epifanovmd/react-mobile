import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KettleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.5 3C7.81 3 4 5.69 4 9C4 10.19 4.5 11.34 5.44 12.33C4.53 13.5 4 14.96 4 16.5C4 17.64 4 18.83 4 20C4 21.11 4.89 22 6 22H19C20.11 22 21 21.11 21 20C21 18.85 21 17.61 21 16.5C21 15.28 20.66 14.07 20 13L22 11L19 8L16.9 10.1C15.58 9.38 14.05 9 12.5 9C10.65 9 8.95 9.53 7.55 10.41C7.19 9.97 7 9.5 7 9C7 7.21 9.46 5.75 12.5 5.75C13.93 5.75 15.3 6.08 16.33 6.67L18.35 4.65C16.77 3.59 14.68 3 12.5 3ZM12.5 11C12.84 11 13.17 11.04 13.5 11.09C10.39 11.57 8 14.25 8 17.5V20H6V17.5C6 15.7761 6.68482 14.1228 7.90381 12.9038C9.12279 11.6848 10.7761 11 12.5 11Z" />
    </Svg>
  );
};
