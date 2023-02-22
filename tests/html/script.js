function sPush (arr, element) {
    const lastInd = arr.length;
    arr[lastInd] = element;
    //modified a little:
    return arr;
}

function sSlice (arr, start, end) {

    const result = [];
    const length = arr.length;

    if (end === 0) {
        return result;
    }
    if (!start || start <= -length) {
        start = 0;
    }
    if (!end || end > length) {
        end = length;
    }

    if (start < 0 && start >= -length) {
        start = length + start;
    }
    if (end < 0 && end >= -length) {
        end = length + end;
    }
    if (end < start) {
        return result;
    }
    for (let i = start; i < end; i += 1) {
        sPush(result, arr[i]);
      }
  return result;
}


function merge(object, ...sourceObjects) {
    for (let key in object) {
      let prop = object[key];
      if(Array.isArray(prop) && prop.length > 1) {
        const targetProp = prop[0];
        merge(targetProp, sSlice(prop, 1, prop.length));
        // for (let j = 0; j < prop.length; j += 1) {
        //   if (typeof prop[j] === "object") {
        //     return this.merge(prop[j], ...prop);
        //   }
        // }
      }
    }
      for (let i = 0; i < sourceObjects.length; i += 1) {
        const currentObj = sourceObjects[i];
          for (let k in currentObj) {
            const sourceProp = currentObj[k];
      if(Array.isArray(sourceProp) && sourceProp.length > 1) {
        const targetProp = sourceProp[0];
        merge(targetProp, sSlice(sourceProp, 1, sourceProp.length));
            if (object[k]) {
              sPush(object[k], sourceProp);
            } else {
              object[k] = sourceProp;
            }
            delete sourceObjects[i][k];
          }
        }
    return object;
  }
}

  const object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };

const other = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
  };

//   debugger;s
const test = merge(object, other);

console.log(test);