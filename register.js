export async function resolve (specifier, context, nextResolve) {
  console.log('context', specifier, context.conditions.includes('react-server'))
  return nextResolve(specifier, {
    ...context, conditions: [...context.conditions, 'react-server']
  }, nextResolve)
}
