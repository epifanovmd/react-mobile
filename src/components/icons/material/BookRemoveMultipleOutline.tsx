import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BookRemoveMultipleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13.09 20H5V6H3V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H13.81C13.4422 21.3865 13.1977 20.7071 13.09 20ZM19 2H9C8.46957 2 7.96086 2.21071 7.58579 2.58579C7.21071 2.96086 7 3.46957 7 4V16C7 16.5304 7.21071 17.0391 7.58579 17.4142C7.96086 17.7893 8.46957 18 9 18H13.09C13.1977 17.2929 13.4422 16.6135 13.81 16H9V4H11V10L13.5 7.75L16 10V4H19V13C19.6811 12.999 20.3575 13.114 21 13.34V4C21 3.46957 20.7893 2.96086 20.4142 2.58579C20.0391 2.21071 19.5304 2 19 2ZM22.54 16.88L20.41 19L22.54 21.12L21.12 22.54L19 20.41L16.88 22.54L15.46 21.12L17.59 19L15.46 16.88L16.88 15.46L19 17.59L21.12 15.46L22.54 16.88Z" />
    </Svg>
  );
};
