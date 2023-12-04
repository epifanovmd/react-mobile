import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SoccerFieldIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 4.89 21.1 4 20 4H4ZM4 6H11V8.13C9.24 8.59 8 10.18 8 12C8 13.82 9.24 15.41 11 15.87V18H4V16H7V8H4V6ZM13 6H20V8H17V16H20V18H13V15.87C14.76 15.41 16 13.82 16 12C16 10.18 14.76 8.59 13 8.13V6ZM4 10H5V14H4V10ZM19 10H20V14H19V10ZM13 10.27C13.62 10.63 14 11.29 14 12C14 12.71 13.62 13.37 13 13.73V10.27ZM11 10.27V13.73C10.38 13.37 10 12.71 10 12C10 11.29 10.38 10.63 11 10.27Z" />
    </Svg>
  );
};
