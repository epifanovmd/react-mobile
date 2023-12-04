import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FolderPoundOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 18H4V8H20V18ZM20 6H12L10 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V8C22 6.89 21.1 6 20 6ZM19 12V11H17.5L18 9H17L16.5 11H14.5L15 9H14L13.5 11H12V12H13.25L12.75 14H11V15H12.5L12 17H13L13.5 15H15.5L15 17H16L16.5 15H18V14H16.75L17.25 12H19ZM15.75 14H13.75L14.25 12H16.25L15.75 14Z" />
    </Svg>
  );
};
