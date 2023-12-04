import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const DecimalDecreaseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 17L15 20V18H21V16H15V14L12 17ZM9 5C9.79565 5 10.5587 5.31607 11.1213 5.87868C11.6839 6.44129 12 7.20435 12 8V11C12 11.7956 11.6839 12.5587 11.1213 13.1213C10.5587 13.6839 9.79565 14 9 14C8.20435 14 7.44129 13.6839 6.87868 13.1213C6.31607 12.5587 6 11.7956 6 11V8C6 7.20435 6.31607 6.44129 6.87868 5.87868C7.44129 5.31607 8.20435 5 9 5ZM9 7C8.73478 7 8.48043 7.10536 8.29289 7.29289C8.10536 7.48043 8 7.73478 8 8V11C8 11.2652 8.10536 11.5196 8.29289 11.7071C8.48043 11.8946 8.73478 12 9 12C9.26522 12 9.51957 11.8946 9.70711 11.7071C9.89464 11.5196 10 11.2652 10 11V8C10 7.73478 9.89464 7.48043 9.70711 7.29289C9.51957 7.10536 9.26522 7 9 7ZM4 12C4.26522 12 4.51957 12.1054 4.70711 12.2929C4.89464 12.4804 5 12.7348 5 13C5 13.2652 4.89464 13.5196 4.70711 13.7071C4.51957 13.8946 4.26522 14 4 14C3.73478 14 3.48043 13.8946 3.29289 13.7071C3.10536 13.5196 3 13.2652 3 13C3 12.7348 3.10536 12.4804 3.29289 12.2929C3.48043 12.1054 3.73478 12 4 12Z" />
    </Svg>
  );
};