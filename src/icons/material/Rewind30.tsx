import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Rewind30Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 14V20C19 21.11 18.11 22 17 22H15C14.4696 22 13.9609 21.7893 13.5858 21.4142C13.2107 21.0391 13 20.5304 13 20V14C13 13.4696 13.2107 12.9609 13.5858 12.5858C13.9609 12.2107 14.4696 12 15 12H17C18.11 12 19 12.9 19 14ZM15 14V20H17V14H15ZM11 20C11 21.11 10.1 22 9 22H5V20H9V18H7V16H9V14H5V12H9C9.53043 12 10.0391 12.2107 10.4142 12.5858C10.7893 12.9609 11 13.4696 11 14V15.5C11 15.8978 10.842 16.2794 10.5607 16.5607C10.2794 16.842 9.89782 17 9.5 17C9.89782 17 10.2794 17.158 10.5607 17.4393C10.842 17.7206 11 18.1022 11 18.5V20ZM12.5 3C17.15 3 21.08 6.03 22.47 10.22L20.1 11C19.05 7.81 16.04 5.5 12.5 5.5C10.54 5.5 8.77 6.22 7.38 7.38L10 10H3V3L5.6 5.6C7.45 4 9.85 3 12.5 3Z" />
    </Svg>
  );
};
