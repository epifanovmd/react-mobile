import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VirtualRealityIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 3C3.89 3 3 3.9 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5ZM6 9H7.5L8.5 12.43L9.5 9H11L9.25 15H7.75L6 9ZM13 9H16.5C17.35 9 18 9.65 18 10.5V11.5C18 12.1 17.6 12.65 17.1 12.9L18 15H16.5L15.65 13H14.5V15H13V9ZM14.5 10.5V11.5H16.5V10.5H14.5Z" />
    </Svg>
  );
};
