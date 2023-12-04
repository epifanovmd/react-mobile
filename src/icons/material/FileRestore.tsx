import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileRestoreIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2ZM12 18C9.95 18 8.19 16.76 7.42 15H9.13C9.76 15.9 10.81 16.5 12 16.5C12.9283 16.5 13.8185 16.1313 14.4749 15.4749C15.1313 14.8185 15.5 13.9283 15.5 13C15.5 12.0717 15.1313 11.1815 14.4749 10.5251C13.8185 9.86875 12.9283 9.5 12 9.5C10.65 9.5 9.5 10.28 8.9 11.4L10.5 13H6.5V9L7.8 10.3C8.69 8.92 10.23 8 12 8C13.3261 8 14.5979 8.52678 15.5355 9.46447C16.4732 10.4021 17 11.6739 17 13C17 14.3261 16.4732 15.5979 15.5355 16.5355C14.5979 17.4732 13.3261 18 12 18Z" />
    </Svg>
  );
};
