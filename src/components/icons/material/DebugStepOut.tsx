import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DebugStepOutIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.0001 22.0002C11.4696 22.0002 10.9609 21.7894 10.5859 21.4144C10.2108 21.0393 10.0001 20.5306 10.0001 20.0002C10.0001 19.4697 10.2108 18.961 10.5859 18.5859C10.9609 18.2109 11.4696 18.0002 12.0001 18.0002C12.5305 18.0002 13.0392 18.2109 13.4143 18.5859C13.7894 18.961 14.0001 19.4697 14.0001 20.0002C14.0001 20.5306 13.7894 21.0393 13.4143 21.4144C13.0392 21.7894 12.5305 22.0002 12.0001 22.0002ZM13.0001 16.0002H11.0001V6.00016L6.50008 10.5002L5.08008 9.08016L12.0001 2.16016L18.9201 9.08016L17.5001 10.5002L13.0001 6.00016V16.0002Z" />
    </Svg>
  );
};
