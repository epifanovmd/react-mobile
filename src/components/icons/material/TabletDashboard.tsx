import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TabletDashboardIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 18H5V6H19V18ZM21 4H3C1.89 4 1 4.89 1 6V18C1 18.5304 1.21071 19.0391 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V6C23 4.89 22.1 4 21 4ZM7 8H13V13H7V8ZM14 8H17V10H14V8ZM17 11V16H14V11H17ZM7 14H13V16H7V14Z" />
    </Svg>
  );
};
