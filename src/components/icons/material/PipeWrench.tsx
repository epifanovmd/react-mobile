import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PipeWrenchIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.1699 5.63016L14.0599 7.78016L11.9099 5.63016L16.1699 1.41016L19.6899 4.92016C20.8599 6.09016 20.8599 8.00016 19.6899 9.19016L16.1699 5.63016ZM4.82992 12.7002L6.99992 14.8102L10.4999 11.3002L8.38992 9.19016L4.82992 12.7002ZM15.4699 7.78016L18.9999 11.3002L17.5799 12.7002L16.8799 12.0002L6.22992 22.5902L3.41992 19.7802L11.9099 11.3002L7.68992 7.03016L9.79992 4.92016L14.0599 9.19016L15.4699 7.78016Z" />
    </Svg>
  );
};
