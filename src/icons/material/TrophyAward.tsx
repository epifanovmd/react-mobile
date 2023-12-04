import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TrophyAwardIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.2001 10.7L16.6001 16L12.0001 12.2L7.4001 16L8.8001 10.8L4.6001 7.3L10.0001 7L12.0001 2L14.0001 7L19.4001 7.3L15.2001 10.7ZM14.0001 19H13.0001V16L12.0001 15L11.0001 16V19H10.0001C8.9001 19 8.0001 19.9 8.0001 21V22H16.0001V21C16.0001 19.9 15.1101 19 14.0001 19Z" />
    </Svg>
  );
};
