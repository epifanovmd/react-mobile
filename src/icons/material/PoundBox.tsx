import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PoundBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89 21 3 20.1 3 19V5ZM7 18H9L9.35 16H13.35L13 18H15L15.35 16H17.35L17.71 14H15.71L16.41 10H18.41L18.76 8H16.76L17.12 6H15.12L14.76 8H10.76L11.12 6H9.12L8.76 8H6.76L6.41 10H8.41L7.71 14H5.71L5.35 16H7.35L7 18ZM10.41 10H14.41L13.71 14H9.71L10.41 10Z" />
    </Svg>
  );
};
