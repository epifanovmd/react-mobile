import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Numeric6BoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 9H11V11H13C13.5304 11 14.0391 11.2107 14.4142 11.5858C14.7893 11.9609 15 12.4696 15 13V15C15 16.11 14.1 17 13 17H11C10.4696 17 9.96086 16.7893 9.58579 16.4142C9.21071 16.0391 9 15.5304 9 15V9C9 7.89 9.9 7 11 7H15V9ZM19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM11 15H13V13H11V15Z" />
    </Svg>
  );
};
