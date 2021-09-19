module.exports = (on, config) => {
  require("@cypress/code-coverage/task")(on, config)
  // console.log("process.env", process.env.DISABLE_COVERAGE)

  // add other tasks to be registered here

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
