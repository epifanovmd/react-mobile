import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TestTubeEmptyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 2H17V4H16V18C16 19.0609 15.5786 20.0783 14.8284 20.8284C14.0783 21.5786 13.0609 22 12 22C10.9391 22 9.92172 21.5786 9.17157 20.8284C8.42143 20.0783 8 19.0609 8 18V4H7V2ZM14 4H10V18C10 18.5304 10.2107 19.0391 10.5858 19.4142C10.9609 19.7893 11.4696 20 12 20C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V4Z" />
    </Svg>
  );
};
