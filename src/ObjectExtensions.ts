declare global {
    interface Object {
        toJson();
    }
}

Object.prototype.toJson = function() {
    return JSON.parse(JSON.stringify(this));
};

Array.prototype.isEmpty = function() {
    return this.length === 0;
};

Array.prototype.isNotEmpty = function() {
    return this.length > 0;
};

Array.prototype.firstOrNull = function(condition?: (item) => boolean) {
    if (this.length === 0) return null;
    const result = this.first(condition);
    if (typeof result === 'undefined') return null;
    return result;
};

Array.prototype.first = function(condition?: (item) => boolean) {
    if (typeof condition === 'undefined') return this[0];
    return this.find(condition);
};

Array.prototype.lastOrNull = function(condition?: (item) => boolean) {
    if (this.length === 0) return null;
    const result = this.last(condition);
    if (typeof result === 'undefined') return null;
    return result;
};

Array.prototype.last = function(condition?: (item) => boolean) {
    if (typeof condition === 'undefined') return this[this.length - 1];
    return this.reverse().find(condition);
};

Array.prototype.contains = function(element) {
    return this.indexOf(element) !== -1;
};

Array.prototype.all = function(condition: (item) => boolean) {
    for (const item of this) {
        if (!condition(item)) return false;
    }
    return true;
};

Array.prototype.any = function(condition: (item) => boolean) {
    for (const item of this) {
        if (condition(item)) return true;
    }
    return false;
};

Array.prototype.drop = function(n: number) {
    return this.slice(n);
};

Array.prototype.dropLast = function(n: number) {
    return this.slice(0, this.length - n);
};

Array.prototype.forEachIndexed = function(action: (item, index) => void) {
    for (let i = 0; i < this.length; i++) {
        action(this[i], i);
    }
};

Array.prototype.mapIndexed = function(transform: (item, index) => any) {
    const transformed: any[] = [];
    for (let i = 0; i < this.length; i++) {
        transformed.push(transform(this[i], i));
    }
    return transformed;
};

Array.prototype.max = function() {
    if (this.length === 0) return undefined;
    if (typeof this[0] === 'number') return Math.max(...this);
    if (typeof this[0] === 'string') return this.sort().last();
    return undefined;
};

Array.prototype.maxOf = function(transform: (item) => any) {
    return this.map(transform).max();
};

Array.prototype.min = function() {
    if (this.length === 0) return undefined;
    if (typeof this[0] === 'number') return Math.min(...this);
    if (typeof this[0] === 'string') return this.sort().first();
    return undefined;
};

Array.prototype.minOf = function(transform: (item) => any) {
    return this.map(transform).min();
};

Array.prototype.single = function(condition?: (item) => boolean) {
    const element = this.singleOrNull(condition);
    if (element === null) throw new Error('Must have a single element');
    return element;
};

Array.prototype.singleOrNull = function(condition?: (item) => boolean) {
    const elements = condition ? this.filter(condition) : this;
    if (elements.length !== 1) return null;
    return elements[0];
};

export {};
