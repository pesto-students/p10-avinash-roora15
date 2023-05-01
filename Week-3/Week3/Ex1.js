function add(a, b) {
  return a + b;
}

function memoize(add) {
  const cache = {}; 

  function memoized(...args) {
  const cacheKey = args.join("_"); 
  if (cacheKey in cache) { 
    return cache[cacheKey]; 
  }
  const result = args.reduce(add, 0);
  cache[cacheKey] = result;
  return result;
  }

  // its best to clear cache after use
  memoized.clearCache = function() {
    Object.keys(cache).forEach((key) => delete cache[key]);
  };

  return memoized;
}

const memoizeAdd = memoize(add);


memoizeAdd(100, 100); 
memoizeAdd(100); 
memoizeAdd(100, 200); 
memoizeAdd(100, 100); 

memoizeAdd.clearCache();