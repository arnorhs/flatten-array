module.exports = flatten;

function flatten(list){
  return list.reduce(function(prev, curr){
    return prev.concat(Array.isArray(curr) ? flatten(curr) : curr);
  }, []);
}
