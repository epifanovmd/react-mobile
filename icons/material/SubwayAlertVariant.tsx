import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SubwayAlertVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 11V6H11V11H16ZM14.5 17C15.3 17 16 16.3 16 15.5C16 14.7 15.3 14 14.5 14C13.7 14 13 14.7 13 15.5C13 16.3 13.7 17 14.5 17ZM9 11V6H4V11H9ZM5.5 17C6.3 17 7 16.3 7 15.5C7 14.7 6.3 14 5.5 14C4.7 14 4 14.7 4 15.5C4 16.3 4.7 17 5.5 17ZM10 2C14.4 2 18 2.5 18 6V15.5C18 17.4 16.4 19 14.5 19L16 20.5V21H4V20.5L5.5 19C3.6 19 2 17.4 2 15.5V6C2 2.5 5.6 2 10 2ZM20 13V7H22V13H20ZM20 17V15H22V17H20Z" />
    </Svg>
  );
};
