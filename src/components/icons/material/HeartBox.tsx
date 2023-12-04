import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HeartBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3ZM12 17L12.72 16.34C15.3 14 17 12.46 17 10.57C17 9.03 15.79 7.82 14.25 7.82C13.38 7.82 12.55 8.23 12 8.87C11.45 8.23 10.62 7.82 9.75 7.82C8.21 7.82 7 9.03 7 10.57C7 12.46 8.7 14 11.28 16.34L12 17Z" />
    </Svg>
  );
};
