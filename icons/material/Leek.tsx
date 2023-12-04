import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const LeekIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10.0001 2V5.55L12.0001 7.55L14.0001 5.55V2H10.0001ZM6.34012 4L3.87012 6.5L15.0001 17.62V12.67L6.34012 4ZM17.6601 4L13.0601 8.61L15.5401 11.09L20.1301 6.5L17.6601 4ZM9.00012 13.74V20C9.00012 20.5304 9.21083 21.0391 9.5859 21.4142C9.96098 21.7893 10.4697 22 11.0001 22H13.0001C13.5306 22 14.0393 21.7893 14.4143 21.4142C14.7894 21.0391 15.0001 20.5304 15.0001 20V19.74L13.0001 17.74V20H11.0001V15.74L9.00012 13.74Z" />
    </Svg>
  );
};
