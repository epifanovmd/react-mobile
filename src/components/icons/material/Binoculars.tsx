import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BinocularsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 6H13V13H11V6ZM9 20C9 20.2652 8.89464 20.5196 8.70711 20.7071C8.51957 20.8946 8.26522 21 8 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V15L6 6H10V13C10 13.2652 9.89464 13.5196 9.70711 13.7071C9.51957 13.8946 9.26522 14 9 14V20ZM10 5H7V3H10V5ZM15 20V14C14.7348 14 14.4804 13.8946 14.2929 13.7071C14.1054 13.5196 14 13.2652 14 13V6H18L20 15V20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H16C15.7348 21 15.4804 20.8946 15.2929 20.7071C15.1054 20.5196 15 20.2652 15 20ZM14 5V3H17V5H14Z" />
    </Svg>
  );
};
