import '../src/ObjectExtensions';

it('toJson', () => {
    const obj = new Dummy('dummy', 54, new Other('other', 23));
    expect(obj.toJson()).toEqual({
        anString: 'dummy',
        aNumber: 54,
        anObject: {
            anString: 'other',
            aNumber: 23,
        },
    });
});

class Dummy {
    constructor(public anString: string, public aNumber: number, public anObject: Other) {}
}

class Other {
    constructor(public anString: string, public aNumber: number) {}
}
