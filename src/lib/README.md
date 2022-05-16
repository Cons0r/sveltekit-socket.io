# Library folder
This folder can be accessed in code by $lib eg.
```js
import Error from '$lib/Error.svelte'
```
can be helpful for files deep inside routes folder eg. routes/user/[id]/settings/profile/index.svelte  
would require
```js
import Error from  '../../../../../lib/Error.svelte'
```
$lib can be changed to whatever you want by changing $lib and $lib/* to $\<name> and $\<name>/*
inside compilerOptions.paths in tsconfig.json
