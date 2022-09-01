#!/usr/bin/env node

'use strict'

import {
  DesignVersion,
  experimentalPackages,
  nextChannelLabel,
  stablePackages,
} from '../../versions.mjs'
import { isExperimentalRelease, warning } from '../utils.mjs'
import updatePackageVersions from './publish-commands/update-package-versions.mjs'
import parseParams from './publish-commands/parse-params.mjs'
import buildPackages from './shared-commands/build-packages.mjs'
import printPrereleaseSummary from './shared-commands/print-prerelease-summary.mjs'
import { info } from '../theme.mjs'

async function run() {
  const params = parseParams()
  const versions = {
    DesignVersion,
    experimentalPackages,
    nextChannelLabel,
    stablePackages,
  }

  warning(
    isExperimentalRelease(params.releaseChannel),
    'Prepare release script is only for experimental packages. If you would like to prepare a stable release, please run prepare-release-from-npm'
  )

  console.log(info('\n👷‍♀️  Preparing ' + params.release + ' release...'))
  await buildPackages(experimentalPackages, params.ci)
  await updatePackageVersions(experimentalPackages, {
    ...versions,
    ...params,
  })

  if (!params.ci) {
    printPrereleaseSummary(!isExperimentalRelease())
  }
}

run()
