#!/usr/bin/env node

'use strict'

import chalk from 'chalk'
import { execRead, logPromise } from '../../utils.mjs'
import { error } from '../../theme.mjs'

async function checkNPMPermissions(packages) {
  const failedProjects = []
  const currentUser = await execRead('npm whoami')

  const checkProject = async (project) => {
    console.log(currentUser)

    if (currentUser !== 'pluralsight') {
      failedProjects.push(project)
    }
  }

  await logPromise(
    Promise.all(packages.map(checkProject)),
    `Checking NPM permissions for ${chalk.bold(currentUser)}`,
    10000
  )

  if (failedProjects.length) {
    console.error(
      error(`ERROR: Insufficient NPM permissions for user ${currentUser}`)
    )
    console.error(
      error(
        `${currentUser} is not an owner for: ${failedProjects
          .map((name) => error(name))
          .join(', ')}`
      )
    )
    process.exit(1)
  }
}

export default checkNPMPermissions
