import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MailboxUpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 9H9V11H5V9ZM22 9V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H2V9C2 7.67392 2.52678 6.40215 3.46447 5.46447C4.40215 4.52678 5.67392 4 7 4H17C18.3261 4 19.5979 4.52678 20.5355 5.46447C21.4732 6.40215 22 7.67392 22 9ZM10 9C10 8.20435 9.68393 7.44129 9.12132 6.87868C8.55871 6.31607 7.79565 6 7 6C6.20435 6 5.44129 6.31607 4.87868 6.87868C4.31607 7.44129 4 8.20435 4 9V18H10V9ZM16 7H12V13H14V9H16V7Z" />
    </Svg>
  );
};
