import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WiperIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 4C5 4 2 9 2 9L9 16C9 16 9.5 15.1 10.4 14.5L10.7 16.5C10.3 16.8 10 17.4 10 18C10 18.5304 10.2107 19.0391 10.5858 19.4142C10.9609 19.7893 11.4696 20 12 20C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18C14 17.1 13.5 16.4 12.7 16.1L12.3 14C14.1 14.2 15 16 15 16L22 9C22 9 19 4 12 4ZM15.1 13.1C14.3 12.5 13.3 12 12 12L11 6.1C11.3 6 11.7 6 12 6C15.7 6 18.1 7.7 19.3 8.9L15.1 13.1ZM8.9 13.1L4.7 8.9C5.5 8 7 7 9 6.4L10 12.4C9.6 12.6 9.2 12.8 8.9 13.1Z" />
    </Svg>
  );
};
