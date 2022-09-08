#!/usr/bin/env node

'use strict'

import chalk from 'chalk'
import { execRead, logPromise } from '../../utils.mjs'
import { error, info } from '../../theme.mjs'

async function checkNPMPermissions(packages) {
  const failedProjects = []
  const currentUser = await execRead('yarn npm whoami')

  const checkProject = async (project) => {
    console.log(info(`Current user: ${currentUser}`))

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
      error(
        'ERROR: error Insufficient NPM permissions\nNPM user ' +
          currentUser +
          ' is not an owner for: ' +
          failedProjects.map((name) => error(name)).join(', ') +
          '\nPlease contact a TVA team member to be added to the above project(s).'
      )
    )
    console.error()
    process.exit(1)
  }
}

export default checkNPMPermissions
