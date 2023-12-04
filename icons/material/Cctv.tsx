import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CctvIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6.03 12.0301L8.03 15.5001L5.5 18.6801L2 12.6201L6.03 12.0301ZM17 18.0001V15.2901C17.88 14.9001 18.5 14.0301 18.5 13.0001C18.5 12.4301 18.3 11.9001 17.97 11.5001L19.94 10.3501C20.95 9.76009 21.3 8.47009 20.71 7.46009L19.33 5.06009C18.74 4.05009 17.45 3.70009 16.44 4.28009L8.31 9.00009C7.36 9.53009 7.03 10.7501 7.58 11.7101L9.08 14.3101C9.63 15.2601 10.86 15.5901 11.81 15.0401L13.69 13.9601C13.94 14.5501 14.41 15.0301 15 15.2901V18.0001C15 19.1001 15.9 20.0001 17 20.0001H22V18.0001H17Z" />
    </Svg>
  );
};
