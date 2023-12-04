import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const VariableBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM7.4 18C5.9 16.5 5 14.3 5 12C5 9.7 5.9 7.5 7.4 6L9 6.7C7.7 7.9 7 9.9 7 12C7 14.1 7.7 16.1 9 17.3L7.4 18ZM12.7 15L11.9 13L10.5 15H9L11.3 11.9L10 9H11.3L12.1 11L13.5 9H15L12.8 12L14.1 15H12.7ZM16.6 18L15 17.3C16.3 16 17 14.1 17 12C17 9.9 16.3 7.9 15 6.7L16.6 6C18.1 7.5 19 9.7 19 12C19 14.3 18.1 16.5 16.6 18Z" />
    </Svg>
  );
};
