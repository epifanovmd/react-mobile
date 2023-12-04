import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MoveResizeVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1.87996 0.460938L0.459961 1.88094L5.58996 7.00094H1.99996V9.00094H8.99996V2.00094H6.99996V5.59094L1.87996 0.460938ZM11 7.00094V9.00094H21V15.0009H23V9.00094C23 8.4705 22.7892 7.9618 22.4142 7.58672C22.0391 7.21165 21.5304 7.00094 21 7.00094H11ZM6.99996 11.0009V21.0009C6.99996 21.5314 7.21067 22.0401 7.58575 22.4152C7.96082 22.7902 8.46953 23.0009 8.99996 23.0009H15V21.0009H8.99996V11.0009H6.99996ZM15.88 14.4609L14.46 15.8809L19.6 21.0009H17V23.0009H23V17.0009H21V19.5909" />
    </Svg>
  );
};
