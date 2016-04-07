// This file was generated by nomdl/codegen.
// @flow
/* eslint-disable */

import {
  Field as _Field,
  Package as _Package,
  Ref as _Ref,
  createStructClass as _createStructClass,
  makeEnumType as _makeEnumType,
  makeStructType as _makeStructType,
  makeType as _makeType,
  registerPackage as _registerPackage,
} from '@attic/noms';
import type {
  Struct as _Struct,
} from '@attic/noms';
import * as dep from './sha1_eda4273.js';


const _pkg = new _Package([
  _makeEnumType('LocalE', 'LocalE1', 'Ignored'),
  _makeStructType('ImportUser',
      [
        new _Field('importedStruct', _makeType(_Ref.parse('sha1-eda4273cba9d5d4a1bccf41bcaec64743863cde0'), 0), false),
        new _Field('enum', _makeType(new _Ref(), 0), false),
      ],
      [

      ]
    ),
], [
  _Ref.parse('sha1-eda4273cba9d5d4a1bccf41bcaec64743863cde0'),
]);
_registerPackage(_pkg);
const LocalE$type = _makeType(_pkg.ref, 0);
const LocalE$typeDef = _pkg.types[0];
const ImportUser$type = _makeType(_pkg.ref, 1);
const ImportUser$typeDef = _pkg.types[1];


export type LocalE =
  0 |  // LocalE1
  1;  // Ignored

type ImportUser$Data = {
  importedStruct: dep.D;
  enum: LocalE;
};

interface ImportUser$Interface extends _Struct {
  constructor(data: ImportUser$Data): void;
  importedStruct: dep.D;  // readonly
  setImportedStruct(value: dep.D): ImportUser$Interface;
  enum: LocalE;  // readonly
  setEnum(value: LocalE): ImportUser$Interface;
}

export const ImportUser: Class<ImportUser$Interface> = _createStructClass(ImportUser$type, ImportUser$typeDef);
