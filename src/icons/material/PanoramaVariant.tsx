import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PanoramaVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.7 4.10054C18.7 4.80054 15.9 5.50054 12 5.50054C8.1 5.50054 5.1 4.70054 3.3 4.10054C2.7 3.80054 2 4.30054 2 5.00054V19.0005C2 19.7005 2.7 20.2005 3.3 20.0005C5.4 19.3005 8.1 18.5005 12 18.5005C15.9 18.5005 18.7 19.3005 20.7 20.0005C21.4 20.2005 22 19.7005 22 19.0005V5.00054C22 4.30054 21.3 3.80054 20.7 4.10054ZM12 15.0005C9.7 15.0005 7.5 15.1005 5.5 15.4005L9.2 11.0005L11.2 13.4005L14 10.0005L18.5 15.4005C16.5 15.1005 14.3 15.0005 12 15.0005Z" />
    </Svg>
  );
};
