import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FacebookIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2.04004C6.5 2.04004 2 6.53004 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85004C10.44 7.34004 11.93 5.96004 14.22 5.96004C15.31 5.96004 16.45 6.15004 16.45 6.15004V8.62004H15.19C13.95 8.62004 13.56 9.39004 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3856 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53004 17.5 2.04004 12 2.04004Z" />
    </Svg>
  );
};
