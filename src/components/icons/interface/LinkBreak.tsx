import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LinkBreakIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M16 20V18M18 16H20M7.04996 11.293L5.63574 12.7072C4.07365 14.2693 4.07466 16.8016 5.63675 18.3637C7.19885 19.9258 9.7308 19.9262 11.2929 18.3641L12.7076 16.9497M6 8H4M8 4V6M11.293 7.05044L12.7072 5.63623C14.2693 4.07413 16.8016 4.07368 18.3637 5.63578C19.9258 7.19787 19.9254 9.7308 18.3633 11.2929L16.9492 12.7071"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
