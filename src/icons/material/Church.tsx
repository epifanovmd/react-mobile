import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChurchIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 2H13V4H15V6H13V9.4L22 13V15L20 14.2V22H14V17C14 16.4696 13.7893 15.9609 13.4142 15.5858C13.0391 15.2107 12.5304 15 12 15C11.4696 15 10.9609 15.2107 10.5858 15.5858C10.2107 15.9609 10 16.4696 10 17V22H4V14.2L2 15V13L11 9.4V6H9V4H11V2ZM6 20H8V15L7 14L6 15V20ZM16 20H18V15L17 14L16 15V20Z" />
    </Svg>
  );
};
