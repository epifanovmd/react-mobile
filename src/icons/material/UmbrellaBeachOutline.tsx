import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UmbrellaBeachOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.9999 19.57L19.5699 21L13.1299 14.56L14.5599 13.13L20.9999 19.57ZM13.1199 3C10.5399 3 7.95993 4 5.99993 5.95L5.96993 5.96C1.99993 9.91 1.99993 16.32 5.96993 20.27L20.2699 5.96C18.2999 4 15.7099 3 13.1199 3ZM6.13993 17.27C5.39993 16.03 4.99993 14.61 4.99993 13.12C4.99993 12.19 5.15993 11.3 5.45993 10.45C5.64993 12.36 6.34993 14.24 7.52993 15.89L6.13993 17.27ZM8.99993 14.43C7.62993 12.38 7.11993 9.93 7.59993 7.6C8.17993 7.5 8.75993 7.42 9.34993 7.42C11.1499 7.42 12.8999 7.97 14.4299 9L8.99993 14.43ZM10.4499 5.46C11.2999 5.16 12.1899 5 13.1199 5C14.6099 5 16.0299 5.4 17.2699 6.14L15.8799 7.53C14.2299 6.35 12.3599 5.65 10.4499 5.46Z" />
    </Svg>
  );
};
