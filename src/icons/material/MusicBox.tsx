import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 9H13V14.5C13 15.163 12.7366 15.7989 12.2678 16.2678C11.7989 16.7366 11.163 17 10.5 17C9.83696 17 9.20107 16.7366 8.73223 16.2678C8.26339 15.7989 8 15.163 8 14.5C8 13.837 8.26339 13.2011 8.73223 12.7322C9.20107 12.2634 9.83696 12 10.5 12C11.07 12 11.58 12.19 12 12.5V7H16V9ZM19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z" />
    </Svg>
  );
};
