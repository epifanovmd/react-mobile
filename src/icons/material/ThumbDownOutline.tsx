import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ThumbDownOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19 15V3H23V15H19ZM15 3C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V15C17 15.55 16.78 16.05 16.41 16.41L9.83 23L8.77 21.94C8.5 21.67 8.33 21.3 8.33 20.88L8.36 20.57L9.31 16H3C1.89 16 1 15.1 1 14V12C1 11.74 1.05 11.5 1.14 11.27L4.16 4.22C4.46 3.5 5.17 3 6 3H15ZM15 5H5.97L3 12V14H11.78L10.65 19.32L15 14.97V5Z" />
    </Svg>
  );
};
