import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ZodiacGeminiIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.0001 5.30063C19.3501 4.97063 20.6601 4.54062 21.9401 4.00062L21.1801 2.14062C18.2701 3.36063 15.1501 4.00062 12.0001 4.00062C8.85006 4.00062 5.73006 3.38063 2.82006 2.17062L2.06006 4.00062C3.34006 4.54062 4.65006 4.97063 6.00006 5.30063V18.7006C4.65006 19.0306 3.34006 19.4606 2.06006 20.0006L2.82006 21.8606C8.70006 19.4206 15.3001 19.4206 21.1801 21.8606L21.9401 20.0006C20.6601 19.4606 19.3501 19.0306 18.0001 18.7006V5.30063ZM8.00006 18.3006V5.69062C9.32006 5.89062 10.6601 6.00062 12.0001 6.00062C13.3401 6.00062 14.6801 5.89062 16.0001 5.69062V18.3106C13.3501 17.9006 10.6501 17.9006 8.00006 18.3106V18.3006Z" />
    </Svg>
  );
};
