import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ImageBrokenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V11H19V13H17V15H15V17H13V19H11V21H5C3.89 21 3 20.1 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15V19H17V17H19V15H21ZM19 8.5C19 8.36739 18.9473 8.24021 18.8536 8.14645C18.7598 8.05268 18.6326 8 18.5 8H5.5C5.36739 8 5.24021 8.05268 5.14645 8.14645C5.05268 8.24021 5 8.36739 5 8.5V15.5C5 15.6326 5.05268 15.7598 5.14645 15.8536C5.24021 15.9473 5.36739 16 5.5 16H11V15H13V13H15V11H17V9H19V8.5Z" />
    </Svg>
  );
};
