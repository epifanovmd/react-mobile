import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicAccidentalNaturalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10 8.75V3.5H8V17.5L14 15.25V20.5H16V6.5L10 8.75ZM14 13.25L10 14.75V10.75L14 9.25V13.25Z" />
    </Svg>
  );
};
