import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClockTimeOneOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.47 22 2 17.5 2 12C2 6.5 6.5 2 12 2ZM15.3 7.8L12.3 13H11V7H12.5V9.65L14 7.05L15.3 7.8Z" />
    </Svg>
  );
};
