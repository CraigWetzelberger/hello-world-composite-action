
function component() {
  console.log('!!!!!!!!----------------from index.js')

  function Test() {
    return 'hello from Test'
  }

  return {
    "string": "hello from component",
    "Test": Test
  }
}


