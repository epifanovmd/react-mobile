import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WindowShutterAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 4H20V8H18V20H16V8H6V20H4V8H2V4ZM7 9H15V11H7V9ZM7 12H15V14H7V12ZM20 19V17H22V19H20ZM20 15V10H22V15H20Z" />
    </Svg>
  );
};
