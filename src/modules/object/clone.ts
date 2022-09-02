// 浅拷贝
/**
 *
 * @param target 需要clone的对象
 * @returns clone的新对象
 */
const clone = (target: object) => {
  if (Array.isArray(target)) return [...target];
  return { ...target };
};

// 深拷贝
/**
 * 
 * @param target 需要clone的对象
 * @returns clone的新对象
 */
const deepClone = (target, hash = new WeakMap()) => {
  // 额外开辟一个存储空间WeakMap来存储当前对象
  if (target === null || target === undefined) return target; // 如果是 null 或 undefined 就不进行拷贝操作
  if (target instanceof Date) return new Date(target); // 处理Date对象
  if (target instanceof RegExp) return new RegExp(target); // 处理正则对象
  if (typeof target !== 'object') return target; // 处理原始类型和函数 不需要深拷贝，直接返回

  // 是引用类型的话就要进行深拷贝
  if (hash.get(target)) return hash.get(target); // 当需要拷贝当前对象时，先去存储空间中找，如果有的话直接返回
  const cloneTarget = new target.constructor(); // 创建一个新的克隆对象或克隆数组
  hash.set(target, cloneTarget); // 如果存储空间中没有就存进 hash 里

  // 这里我们其实可以选择使用 Object.keys(target) 静态方法获取到该对象中的每一个key
  // 但问题是若对象中存在Symbol类型的key，就遍历不到这个属性了
  // 所以我们改用Reflect.ownKeys()方法获取到对象中的每一个key，该方法支持获取Symbol类型的key
  Reflect.ownKeys(target).forEach((key) => {
    // 引入 Reflect.ownKeys，处理 Symbol 作为键名的情况
    cloneTarget[key] = deepClone(target[key], hash); // 遍历拿到key之后递归拷贝每一层
  });

  return cloneTarget; // 返回克隆出来的对象
};

export { deepClone, clone };
