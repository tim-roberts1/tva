#!/usr/bin/env node

'use strict'

import chalk from 'chalk'
import { execRead, logPromise } from '../../utils.mjs'
import { error } from '../../theme.mjs'

async function checkNPMPermissions(packages) {
  const failedProjects = []
  const currentUser = await execRead('yarn npm whoami')

  const checkProject = async (project) => {
    const owner = await execRead(`yarn npm info @pluralsight/${project}`)

    console.log(owner)
    console.log(currentUser)

    if (currentUser !== 'pluralsight') {
      failedProjects.push(project)
    }
  }

  await logPromise(
    Promise.all(packages.map(checkProject)),
    `Checking NPM permissions for ${chalk.bold(currentUser)}`
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
