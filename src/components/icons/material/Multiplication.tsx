import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MultiplicationIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10.9999 3H12.9999V10.27L19.2899 6.64L20.2899 8.37L13.9999 12L20.2999 15.64L19.2999 17.37L12.9999 13.72V21H10.9999V13.73L4.68994 17.36L3.68994 15.63L9.99994 12L3.71994 8.36L4.71994 6.63L10.9999 10.26V3Z" />
    </Svg>
  );
};
