module.exports = {
  apps : [{
    name: 'svelte_server',
    script: '__sapper__/build',
    env: {
      'NODE_ENV': 'production',
    }
  }],
}