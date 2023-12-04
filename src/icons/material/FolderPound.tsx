import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FolderPoundIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15.25 13H17.25L16.75 15H14.75L15.25 13ZM22 8V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8ZM20 12H18.5L19 10H18L17.5 12H15.5L16 10H15L14.5 12H13V13H14.25L13.75 15H12V16H13.5L13 18H14L14.5 16H16.5L16 18H17L17.5 16H19V15H17.75L18.25 13H20V12Z" />
    </Svg>
  );
};
