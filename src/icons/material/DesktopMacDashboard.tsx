import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DesktopMacDashboardIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 14V4H3V14H21ZM21 2C21.5304 2 22.0391 2.21071 22.4142 2.58579C22.7893 2.96086 23 3.46957 23 4V16C23 16.5304 22.7893 17.0391 22.4142 17.4142C22.0391 17.7893 21.5304 18 21 18H14L16 21V22H8V21L10 18H3C1.89 18 1 17.1 1 16V4C1 2.89 1.89 2 3 2H21ZM4 5H15V10H4V5ZM16 5H20V7H16V5ZM20 8V13H16V8H20ZM4 11H9V13H4V11ZM10 11H15V13H10V11Z" />
    </Svg>
  );
};
