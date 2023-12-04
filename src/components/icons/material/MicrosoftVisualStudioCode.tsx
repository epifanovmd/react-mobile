import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MicrosoftVisualStudioCodeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.9999 16.4691V7.3891L10.9999 11.9291L16.9999 16.4691ZM2.2199 9.1891C1.9199 8.8691 1.9099 8.3691 2.1999 8.0391L3.3999 6.9291C3.5999 6.7491 4.0899 6.6691 4.4499 6.9291L7.8699 9.5391L15.7999 2.2891C16.1199 1.9691 16.6699 1.8391 17.2999 2.1691L21.2999 4.0791C21.6599 4.2891 21.9999 4.6191 21.9999 5.2291V18.7291C21.9999 19.1291 21.7099 19.5591 21.3999 19.7291L16.9999 21.8291C16.6799 21.9591 16.0799 21.8391 15.8699 21.6291L7.8499 14.3291L4.4499 16.9291C4.0699 17.1891 3.5999 17.1191 3.3999 16.9291L2.1999 15.8291C1.8799 15.4991 1.9199 14.9591 2.2499 14.6291L5.2499 11.9291" />
    </Svg>
  );
};
