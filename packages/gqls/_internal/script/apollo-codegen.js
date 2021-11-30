#!/usr/bin/env node
const path = require('path');
const prompts = require('prompts');
const {config} = require('dotenv');
const {runCommand, rimraf} = require('./utils');

config();

(async () => {
  await runCommand('node_modules/.bin/apollo', [
    'schema:download',
    'graphql-schema.json',
    `--endpoint=${process.env.HASURA_ENDPOINT}`,
    `--header=x-hasura-admin-secret: ${process.env.HASURA_ADMIN_SECRET}`,
  ]);

  // cleanup previous types
  await rimraf(path.join(__dirname, '../src/graphql/queries/types'));
  await rimraf(path.join(__dirname, '../src/graphql/mutations/types'));
  await rimraf(path.join(__dirname, '../src/graphql/fragments/types'));

  await runCommand('node_modules/.bin/apollo', [
    'codegen:generate',
    '--localSchemaFile=graphql-schema.json',
    '--target=typescript',
    '--includes=src/**/*.ts',
    '--tagName=gql',
    '--addTypename',
    '--globalTypesFile',
    'types/graphql-global-types.ts',
    'types',
  ]);
})();
