import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UltraHighDefinitionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9 7H11V11H13V7H15V17H13V13H11V17H9V7ZM17 7H20C20.7956 7 21.5587 7.31607 22.1213 7.87868C22.6839 8.44129 23 9.20435 23 10V14C23 14.7956 22.6839 15.5587 22.1213 16.1213C21.5587 16.6839 20.7956 17 20 17H17V7ZM20 15C20.2652 15 20.5196 14.8946 20.7071 14.7071C20.8946 14.5196 21 14.2652 21 14V10C21 9.73478 20.8946 9.48043 20.7071 9.29289C20.5196 9.10536 20.2652 9 20 9H19V15H20ZM7 14C7 14.7956 6.68393 15.5587 6.12132 16.1213C5.55871 16.6839 4.79565 17 4 17C3.20435 17 2.44129 16.6839 1.87868 16.1213C1.31607 15.5587 1 14.7956 1 14V7H3V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15C4.26522 15 4.51957 14.8946 4.70711 14.7071C4.89464 14.5196 5 14.2652 5 14V7H7V14Z" />
    </Svg>
  );
};
