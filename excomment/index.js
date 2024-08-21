
function component() {
  console.log('!!!!!!!!----------------from index.js')

  if(process.env.GITHUB_ACCESS_TOKEN !== undefined){
    console.log('Github access token : set' );
  }else{;
    console.log('Github access token : not set' )
  }



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

