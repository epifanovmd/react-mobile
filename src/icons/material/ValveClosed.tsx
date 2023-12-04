import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ValveClosedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22 2V22H20V13H14.82C14.6098 13.5792 14.2264 14.0795 13.7218 14.4332C13.2173 14.7868 12.6161 14.9765 12 14.9765C11.3839 14.9765 10.7827 14.7868 10.2782 14.4332C9.77363 14.0795 9.3902 13.5792 9.18 13H4V22H2V2H4V11H9.18C9.3902 10.4208 9.77363 9.92046 10.2782 9.56684C10.7827 9.21322 11.3839 9.02352 12 9.02352C12.6161 9.02352 13.2173 9.21322 13.7218 9.56684C14.2264 9.92046 14.6098 10.4208 14.82 11H20V2H22Z" />
    </Svg>
  );
};
