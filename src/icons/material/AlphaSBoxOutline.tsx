import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlphaSBoxOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11 7H15V9H11V11H13C13.5304 11 14.0391 11.2107 14.4142 11.5858C14.7893 11.9609 15 12.4696 15 13V15C15 15.5304 14.7893 16.0391 14.4142 16.4142C14.0391 16.7893 13.5304 17 13 17H9V15H13V13H11C10.4696 13 9.96086 12.7893 9.58579 12.4142C9.21071 12.0391 9 11.5304 9 11V9C9 8.46957 9.21071 7.96086 9.58579 7.58579C9.96086 7.21071 10.4696 7 11 7ZM5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3ZM5 5V19H19V5H5Z" />
    </Svg>
  );
};
