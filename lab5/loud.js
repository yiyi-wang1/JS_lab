const load = function (logFn, fn) {
    logFn((`Calling ${fn.name}`));
    const value = fn();
    logFn((`Called ${fn.name} & returned ${value}`));
    return value;
}

const add = () => 1 + 2;
load(console.log, add);