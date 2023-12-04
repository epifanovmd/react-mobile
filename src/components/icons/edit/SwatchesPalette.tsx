import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SwatchesPaletteIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M6.5 21H20.4706C20.763 21 21.0002 20.7631 21.0002 20.4707L21 14.5293M7.98047 20.6713L20.6421 14.7671C20.9071 14.6435 21.0217 14.3285 20.8981 14.0635L18.3872 8.6792C18.2636 8.41421 17.9486 8.29914 17.6836 8.42271L12.0303 11.0591M9.88182 18.4048C9.38152 20.2719 7.46235 21.38 5.59521 20.8797C3.72808 20.3794 2.61982 18.4604 3.12011 16.5933L6.73596 3.09863C6.81163 2.81621 7.10168 2.64855 7.3841 2.72422L13.1231 4.26171C13.4055 4.33738 13.5731 4.6276 13.4974 4.91002L9.88182 18.4048ZM6.5 17.6001H6.502L6.50195 17.6021L6.5 17.6021V17.6001Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
