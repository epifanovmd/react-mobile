import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BookmarkRemoveOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 3C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.89 18.1 3 17 3H7ZM7 5H17V18L12 15.82L7 18V5ZM9.88 7.47L8.47 8.88L10.59 11L8.47 13.12L9.88 14.54L12 12.42L14.12 14.53L15.54 13.12L13.42 11L15.53 8.88L14.12 7.47L12 9.59L9.88 7.47Z" />
    </Svg>
  );
};
