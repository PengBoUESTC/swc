//// [moduleResolutionWithoutExtension6.ts]
//// [/src/bar.cts]
// Extensionless relative path import statement in a cjs module
// Import statements are not allowed in cjs files,
// but other errors should not assume that they are allowed
export { };
 // should error, should not ask for extension
