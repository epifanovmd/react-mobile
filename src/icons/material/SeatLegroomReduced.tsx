import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SeatLegroomReducedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.97 19.2C20.15 20.16 19.42 21 18.5 21H14V18L15 14H9C8.20435 14 7.44129 13.6839 6.87868 13.1213C6.31607 12.5587 6 11.7956 6 11V3H12V9H17C17.5304 9 18.0391 9.21071 18.4142 9.58579C18.7893 9.96086 19 10.4696 19 11L17 18H18.44C19.17 18 19.83 18.5 19.97 19.2ZM5 12V3H3V12C3 13.3261 3.52678 14.5979 4.46447 15.5355C5.40215 16.4732 6.67392 17 8 17H12V15H8C7.20435 15 6.44129 14.6839 5.87868 14.1213C5.31607 13.5587 5 12.7956 5 12Z" />
    </Svg>
  );
};
