const REQUIRED = ['productKind'];

export function routeProduct(input) {
  for (const key of REQUIRED) if (!input?.[key]) throw new Error(`Missing required field: ${key}`);
  const f = {
    contentDriven: false, needsAuth: false, needsDatabase: false, needsRealtime: false,
    needsAI: false, needsPayments: false, needsOffline: false, needs3D: false,
    seoCritical: false, ...input
  };

  if (f.needsPayments || f.needsAuth || f.needsDatabase || f.needsRealtime || f.needsAI) {
    if (f.preferManagedServices === true) return decision('managed-ai-app','managed-hatchable',f,'Managed service requirements justify a service plane.');
    return decision('fullstack','fullstack-app',f,'Persistent/private/server capabilities require a backend.');
  }
  if (f.productKind === 'academic-experience') return decision('academic-experience','vite-experience',f,'Stateful academic scenes, offline operation and specialized media require the Experience Engine.');
  if (f.productKind === 'dashboard' || f.productKind === 'spa') return decision('spa','react-spa',f,'Client state and app-like interaction justify an SPA.');
  if (f.contentDriven || f.productKind === 'landing' || f.productKind === 'institutional') return decision(f.productKind === 'institutional' ? 'institutional' : 'landing','astro-content',f,'Content-first rendering minimizes client JavaScript and preserves semantic delivery.');
  return decision('landing','astro-content',f,'Default to the smallest architecture; escalate only when a requirement proves the need.');
}

function decision(profile,runtime,input,rationale){
  return {profile,runtime,backend: runtime === 'fullstack-app' || runtime === 'managed-hatchable',requirements:input,rationale,guards:{semanticDom:true,accessibility:true,security:true,performanceBudget:true,humanReleaseApproval:true}};
}
