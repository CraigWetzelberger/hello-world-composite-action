
function component() {
  console.log('!!!!!!!!----------------from index.js')


  process.env['GITHUB_OUTPUT'] = 'random-number=1234'


  function Test() {
    return 'hello from Test'
  }

  return {
    "string": "hello from component",
    "Test": Test
  }
}


component()

