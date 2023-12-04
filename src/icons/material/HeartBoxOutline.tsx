import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeartBoxOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 17L11.28 16.34C8.7 14 7 12.46 7 10.57C7 9.03 8.21 7.82 9.75 7.82C10.62 7.82 11.45 8.23 12 8.87C12.55 8.23 13.38 7.82 14.25 7.82C15.79 7.82 17 9.03 17 10.57C17 12.46 15.3 14 12.72 16.34L12 17ZM5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3ZM5 5V19H19V5H5Z" />
    </Svg>
  );
};
