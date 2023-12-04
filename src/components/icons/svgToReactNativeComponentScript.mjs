import fs from 'fs';
import path from 'path';
import {promisify} from 'util';

const fsRename = promisify(fs.rename);
const fsReaddir = promisify(fs.readdir);
const fsWrite = promisify(fs.writeFile);
const fsReadFile = promisify(fs.readFile);

const content  = `import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const replaceName: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      replacedRow
    </Svg>
  );
};`

const iconsDir = path.resolve(path.dirname(''), 'environment');

const files = await fsReaddir(iconsDir);

// rename all files, replace '_' on ''
await Promise.all(
  files.map(async (_fileName) => {
      const fileName = _fileName;
    const fileNamePath = `${iconsDir}/${_fileName}`;
    const newFileName = _fileName.replaceAll('_', '').replaceAll('.svg', '.tsx')
    const newFileNamePath = `${iconsDir}/${newFileName}`

    await fsRename(fileNamePath, newFileNamePath);

    const data = await fsReadFile(newFileNamePath);

    const parseRow = data.toString()
      .replace(/(<svg.*>)|(<\/svg>)/gm, '')
      .replace(/(\n+)/gm, '\n')
      .replace(/<path/gm, '<Path');
    const finalValue = content.replace('replacedRow', parseRow).replace('replaceName', newFileName.replace('.tsx', 'Icon'));

    await fsWrite(newFileNamePath, finalValue);

    return Promise.resolve();
  }),
);
