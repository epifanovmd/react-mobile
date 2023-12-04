import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FolderRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 4L12 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C2.89 20 2 19.1 2 18V6C2 4.89 2.89 4 4 4H10ZM12.46 10.88L14.59 13L12.46 15.12L13.88 16.54L16 14.41L18.12 16.54L19.54 15.12L17.41 13L19.54 10.88L18.12 9.46L16 11.59L13.88 9.46L12.46 10.88Z" />
    </Svg>
  );
};
