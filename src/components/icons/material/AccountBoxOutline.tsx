import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AccountBoxOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 19H5V5H19V19ZM19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 3.89 20.1 3 19 3ZM16.5 16.25C16.5 14.75 13.5 14 12 14C10.5 14 7.5 14.75 7.5 16.25V17H16.5V16.25ZM12 12.25C12.5967 12.25 13.169 12.0129 13.591 11.591C14.0129 11.169 14.25 10.5967 14.25 10C14.25 9.40326 14.0129 8.83097 13.591 8.40901C13.169 7.98705 12.5967 7.75 12 7.75C11.4033 7.75 10.831 7.98705 10.409 8.40901C9.98705 8.83097 9.75 9.40326 9.75 10C9.75 10.5967 9.98705 11.169 10.409 11.591C10.831 12.0129 11.4033 12.25 12 12.25Z" />
    </Svg>
  );
};
