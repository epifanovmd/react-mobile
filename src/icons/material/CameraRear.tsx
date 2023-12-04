import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CameraRearIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 6C10.89 6 10 5.1 10 4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C13.09 2 14 2.9 14 4C14 4.53043 13.7893 5.03914 13.4142 5.41421C13.0391 5.78929 12.5304 6 12 6ZM17 0H7C6.46957 0 5.96086 0.210714 5.58579 0.585786C5.21071 0.960859 5 1.46957 5 2V16C5 16.5304 5.21071 17.0391 5.58579 17.4142C5.96086 17.7893 6.46957 18 7 18H17C17.5304 18 18.0391 17.7893 18.4142 17.4142C18.7893 17.0391 19 16.5304 19 16V2C19 1.46957 18.7893 0.960859 18.4142 0.585786C18.0391 0.210714 17.5304 0 17 0V0ZM14 20V22H19V20H14ZM10 20H5V22H10V24L13 21L10 18V20Z" />
    </Svg>
  );
};
