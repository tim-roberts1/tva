#!/usr/bin/env node

'use strict'

import { exec } from 'child-process-promise'
import { getArtifactPackagePath, getLocalPackagePath } from '../../utils.mjs'
import { info, error } from '../../theme.mjs'

async function buildPackages(packageList, ci) {
  if (ci) {
    console.log(
      info`\n🛠  Copying package build artifacts to local workspaces...`
    )

    await packageList.forEach(async (packageName) => {
      if (packageName === 'shared') {
        return
      }

      const artifactPath = getArtifactPackagePath(packageName)
      const localPath = getLocalPackagePath(packageName)
      await exec(`cp -r ${artifactPath} ${localPath}`)
    })

    return
  }

  console.log(info`\n🛠  Building public packages...`)

  try {
    await packageList.forEach(async (packageName) => {
      const cwd = getLocalPackagePath(packageName)
      await exec('yarn build', { cwd })
    })
  } catch (err) {
    console.error(error('Unable to build all packages.'))
    throw err
  }

  console.log(info('\n✅ Successfully built all packages.'))
}

export default buildPackages
