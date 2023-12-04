import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const RoomServiceOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 5C12.5304 5 13.0391 5.21071 13.4142 5.58579C13.7893 5.96086 14 6.46957 14 7C14 7.24 13.96 7.47 13.88 7.69C17.95 8.5 21 11.91 21 16H3C3 11.91 6.05 8.5 10.12 7.69C10.04 7.47 10 7.24 10 7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21071 11.4696 5 12 5ZM22 19H2V17H22V19ZM12 9.5C8.89 9.5 6.25 11.39 5.34 14H18.66C17.75 11.39 15.11 9.5 12 9.5Z" />
    </Svg>
  );
};
