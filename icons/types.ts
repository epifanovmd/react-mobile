import { SvgProps } from 'react-native-svg';
import { FlexProps } from '../src';

export type FlexSvgProps = FlexProps &
  Omit<SvgProps, 'fontStyle' | 'fontWeight'>;
