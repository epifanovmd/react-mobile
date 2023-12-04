import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21.47 4.35L20.13 3.79V12.82L22.56 6.96C22.97 5.94 22.5 4.77 21.47 4.35ZM1.97001 8.05L6.93001 20C7.24001 20.77 7.97001 21.24 8.74001 21.26C9.00001 21.26 9.27001 21.21 9.53001 21.1L16.9 18.05C17.65 17.74 18.11 17 18.13 16.26C18.14 16 18.09 15.71 18 15.45L13 3.5C12.71 2.73 11.97 2.26 11.19 2.25C10.93 2.25 10.67 2.31 10.42 2.4L3.06001 5.45C2.04001 5.87 1.55001 7.04 1.97001 8.05ZM18.12 4.25C18.12 3.71957 17.9093 3.21086 17.5342 2.83579C17.1592 2.46071 16.6504 2.25 16.12 2.25H14.67L18.12 10.59" />
    </Svg>
  );
};
