declare global {
    interface String {
        padZeros(length: number): string;
        removePrefix(prefix: string): string;
        countOccurrences(text: string): number;
    }
}

String.prototype.padZeros = function(length: number): string {
    return this.padStart(length, '0');
};

String.prototype.removePrefix = function(prefix: string): string {
    if (this.startsWith(prefix)) {
        return this.substr(prefix.length);
    }
    return this.toString();
};

// https://stackoverflow.com/a/7924240
String.prototype.countOccurrences = function(text: string): number {
    if (text.length <= 0) return 0;
    let n = 0, pos = 0, step = text.length;

    // eslint-disable-next-line no-constant-condition
    while (true) {
        pos = this.indexOf(text, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
};

export {};
