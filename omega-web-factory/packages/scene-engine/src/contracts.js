export const experienceNodeKinds = Object.freeze(['opening','concept','evidence','analysis','simulation','case','decision','practice','synthesis','references','closing']);
export const experienceEdgeKinds = Object.freeze(['next','back','branch','explore','retry','compare','return']);
export const renderTiers = Object.freeze(['T0-semantic','T1-motion','T2-webgl','T3-premium']);

export function assertScene(scene){
  if(!scene?.id || !scene?.title || !scene?.kind) throw new Error('Scene requires id, title and kind');
  if(!experienceNodeKinds.includes(scene.kind)) throw new Error(`Unknown scene kind: ${scene.kind}`);
  if(scene.claimIds?.length && !Array.isArray(scene.claimIds)) throw new Error('claimIds must be an array');
  return true;
}
