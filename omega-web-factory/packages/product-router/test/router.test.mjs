import test from 'node:test';
import assert from 'node:assert/strict';
import {routeProduct} from '../src/index.js';

test('content landing routes to Astro profile',()=>assert.equal(routeProduct({productKind:'landing',contentDriven:true}).runtime,'astro-content'));
test('academic experience routes to Vite experience engine',()=>assert.equal(routeProduct({productKind:'academic-experience',needsOffline:true}).runtime,'vite-experience'));
test('private data escalates to backend',()=>assert.equal(routeProduct({productKind:'dashboard',needsDatabase:true}).runtime,'fullstack-app'));
test('managed AI can route to Hatchable',()=>assert.equal(routeProduct({productKind:'assistant',needsAI:true,preferManagedServices:true}).runtime,'managed-hatchable'));
test('missing productKind fails closed',()=>assert.throws(()=>routeProduct({}),/productKind/));
