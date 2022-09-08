#!/usr/bin/env node

'use strict'

import chalk from 'chalk'
import { execRead, logger } from '../../utils.mjs'
import { error, info } from '../../theme.mjs'

async function checkNPMPermissions(packages) {
  const failedProjects = []
  const currentUser = await execRead('yarn npm whoami')

  console.log(info(`Current User: ${currentUser}`))

  const checkProject = async (project) => {
    const owners = (await execRead(`npm owner ls @pluralsight/${project}`))
      .split('\n')
      .filter((owner) => owner)
      .map((owner) => owner.split(' ')[0])

    console.log(info(`${owners} is the owner of ${project}.`))

    if (!owners.includes(currentUser)) {
      failedProjects.push(project)
    }
  }

  await logger(
    Promise.all(packages.map(checkProject)),
    `Checking NPM permissions for ${chalk.bold(currentUser)}`,
    { estimate: 10000 }
  )

  console.log('')

  if (failedProjects.length) {
    console.error(
      error(
        '{error Insufficient NPM permissions}\nNPM user ' +
          currentUser +
          ' is not an owner for: ' +
          failedProjects.map((name) => error(name)).join(', ') +
          '\nPlease contact a TVA team member to be added to the above project(s).'
      )
    )
    process.exit(1)
  }
}

export default checkNPMPermissions
