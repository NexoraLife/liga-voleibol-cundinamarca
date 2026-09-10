import {readFile} from 'node:fs/promises';

const files=['config/product-profiles.json','packages/design-tokens/tokens.json','schemas/omega-product.schema.json','schemas/scene.schema.json'];
for(const file of files){
  const raw=await readFile(new URL(`../${file}`,import.meta.url),'utf8');
  JSON.parse(raw);
  process.stdout.write(`valid json: ${file}\n`);
}
const profiles=JSON.parse(await readFile(new URL('../config/product-profiles.json',import.meta.url),'utf8'));
for(const required of ['landing','institutional','academic-experience','spa','fullstack','managed-ai-app']){
  if(!profiles.profiles[required]) throw new Error(`Missing product profile: ${required}`);
}
const tokens=JSON.parse(await readFile(new URL('../packages/design-tokens/tokens.json',import.meta.url),'utf8'));
for(const theme of ['core','n1','n2','n3','m4']) if(!tokens.themes[theme]) throw new Error(`Missing theme: ${theme}`);
console.log('Omega foundation validation PASS');
