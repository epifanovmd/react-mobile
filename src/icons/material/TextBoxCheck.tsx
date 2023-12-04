import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TextBoxCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 21L14.25 18L15.41 16.84L17 18.43L20.59 14.84L21.75 16.25L17 21ZM12.8 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V12.8C20.12 12.29 19.09 12 18 12L17 12.08V11H7V13H14.69C13.07 14.07 12 15.91 12 18C12 19.09 12.29 20.12 12.8 21ZM12 15H7V17H12V15ZM17 7H7V9H17" />
    </Svg>
  );
};
