
function component() {
  console.log('!!!!!!!!----------------from index.js')
  console.log('Github access token :', process.env.GITHUB_ACCESS_TOKEN )


  process.env['GITHUB_OUTPUT'] = 'index-output=1234'


  function Test() {
    return 'hello from Test'
  }

  return {
    "string": "hello from component",
    "Test": Test
  }
}


component()

