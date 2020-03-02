export function addInfo() {
    return (target: object, key: string ) => {
        let val = target[key];
        const getter = () => {
            return val;
        };

        const setter = (value: string) => {
            val = `!!${value}!!`;
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}

export function Confirmable(message: string) {
    // 多了一个属性描述符的参数
    return (target: object, key: string, descriptor: PropertyDescriptor) => {
        // 原来的函数
        const oroignal = descriptor.value;
        descriptor.value = (...args) => {
            const allow = window.confirm(message);
            if (allow) {
                const result = oroignal.apply(this, args);
                return result;
            }
            return null;
        };
        return descriptor;
    };
}
