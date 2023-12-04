import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Numeric9PlusBoxOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19 11H17V9H15V11H13V13H15V15H17V13H19V19H5V5H19V11ZM19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM9 11V10H10V11H9ZM12 14V10C12 8.89 11.1 8 10 8H9C8.46957 8 7.96086 8.21071 7.58579 8.58579C7.21071 8.96086 7 9.46957 7 10V11C7 12.11 7.9 13 9 13H10V14H7V16H10C10.5304 16 11.0391 15.7893 11.4142 15.4142C11.7893 15.0391 12 14.5304 12 14Z" />
    </Svg>
  );
};
