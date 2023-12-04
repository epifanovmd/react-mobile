import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PipeValveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22 13V21H20V19H16.58C15.81 20.76 14.05 22 12 22C9.95 22 8.19 20.76 7.42 19H4V21H2V13H4V15H7.43C7.93 13.85 8.85 12.93 10 12.42V11H8V9H16V11H14V12.42C15.15 12.93 16.07 13.85 16.57 15H20V13H22ZM17 2H7C6.45 2 6 2.45 6 3C6 3.55 6.45 4 7 4H10V5H11V8H13V5H14V4H17C17.55 4 18 3.55 18 3C18 2.45 17.55 2 17 2Z" />
    </Svg>
  );
};
