import {build} from 'esbuild';
import {spawnSync} from 'node:child_process';
await build({entryPoints:['tests/domain.test.ts'],bundle:true,platform:'node',format:'esm',packages:'external',outfile:'outputs/domain-tests.mjs'});
for(const file of ['outputs/domain-tests.mjs','tests/worker-api.mjs']){const r=spawnSync(process.execPath,[file],{stdio:'inherit'});if(r.status!==0)process.exit(r.status||1);}
