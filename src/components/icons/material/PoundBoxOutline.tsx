import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PoundBoxOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 19H5V5H19V19ZM19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM7 9H9.31L9.63 6H11.63L11.31 9H13.31L13.63 6H15.63L15.31 9H17V11H15.1L14.9 13H17V15H14.69L14.37 18H12.37L12.69 15H10.69L10.37 18H8.37L8.69 15H7V13H8.9L9.1 11H7V9ZM11.1 11L10.9 13H12.9L13.1 11H11.1Z" />
    </Svg>
  );
};
