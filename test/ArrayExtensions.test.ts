import '../src/ArrayExtensions'

it('distinct', () => {
    expect([1, 2, 3, 2, 1].distinct()).toEqual([1, 2, 3])
})

it('isEmpty', () => {
    expect([].isEmpty()).toBe(true)
    expect([3].isEmpty()).toBe(false)
})

it('isNotEmpty', () => {
    expect([].isNotEmpty()).toBe(false)
    expect([3].isNotEmpty()).toBe(true)
})

it('firstOrNull', () => {
    expect([].firstOrNull()).toBeNull()
    expect([5].firstOrNull()).toEqual(5)
    expect([5, 3].firstOrNull()).toEqual(5)
    expect([5, 3].firstOrNull(item => item < 4)).toEqual(3)
    expect([5, 3].firstOrNull(item => item > 6)).toBeNull()
})

it('first', () => {
    expect([].first()).toBeUndefined()
    expect([5].first()).toEqual(5)
    expect([5, 3].first()).toEqual(5)
    expect([5, 3].first(item => item < 4)).toEqual(3)
    expect([5, 3].first(item => item > 6)).toBeUndefined()
})

it('lastOrNull', () => {
    expect([].lastOrNull()).toBeNull()
    expect([5].lastOrNull()).toEqual(5)
    expect([5, 3].lastOrNull()).toEqual(3)
    expect([5, 3].lastOrNull(item => item > 4)).toEqual(5)
    expect([5, 3].lastOrNull(item => item > 6)).toBeNull()
})

it('last', () => {
    expect([].last()).toBeUndefined()
    expect([5].last()).toEqual(5)
    expect([5, 3].last()).toEqual(3)
    expect([5, 3].last(item => item > 4)).toEqual(5)
    expect([5, 3].last(item => item > 6)).toBeUndefined()
})

it('contains', () => {
    expect([1, 2, 3].contains(3)).toBe(true)
    expect([3, 2, 3].contains(3)).toBe(true)
    expect([1, 2, 3].contains(4)).toBe(false)
})

it('single', () => {
    expect([1, 2, 3].single(item => item === 1)).toEqual(1)
    expect([1].single()).toEqual(1)
})

it('single fails with more than one matching element', () => {
    expect(() => [1, 1, 3].single(item => item === 1)).toThrow()
    expect(() => [1, 1, 3].single()).toThrow()
})

it('single fails with no matching element', () => {
    expect(() => [1, 1, 3].single(item => item === 4)).toThrow()
    expect(() => [].single()).toThrow()
})

it('singleOrNull', () => {
    expect([1, 2, 3].singleOrNull(item => item === 1)).toEqual(1)
    expect([1].singleOrNull()).toEqual(1)
})

it('singleOrNull returns null with more than one matching element', () => {
    expect([1, 1, 3].singleOrNull(item => item === 1)).toBeNull()
    expect([1, 1, 3].singleOrNull()).toBeNull()
})

it('singleOrNull returns null with no matching element', () => {
    expect([1, 1, 3].singleOrNull(item => item === 4)).toBeNull()
    expect([].singleOrNull()).toBeNull()
})

it('all returns true if all elements match the given condition', () => {
    expect([1, 2, 3].all(e => e < 5)).toBe(true)
    expect([1, 2, 3].all(e => e > 2)).toBe(false)
})

it('any returns true if any element matches the given condition', () => {
    expect([1, 2, 3].any(e => e === 2)).toBe(true)
    expect([1, 2, 3].any(e => e === 4)).toBe(false)
})

it('drop returns all elements except first n elements', () => {
    expect([1, 2, 3, 4, 5].drop(1)).toEqual([2, 3, 4, 5])
    expect([1, 2, 3, 4, 5].drop(3)).toEqual([4, 5])
})

it('dropLast returns all elements except last n elements', () => {
    expect([1, 2, 3, 4, 5].dropLast(1)).toEqual([1, 2, 3, 4])
    expect([1, 2, 3, 4, 5].dropLast(3)).toEqual([1, 2])
})

it('forEachIndexed performs the given action on each element with index', () => {
    let sumAll = 0
    let sumIndexes = 0
    const numbers = [1, 1, 1]

    numbers.forEachIndexed((e, i) => {
        sumAll += e
        sumIndexes += i
    })

    expect(sumAll).toEqual(3)
    expect(sumIndexes).toEqual(3)
})

it('mapIndexed', () => {
    expect([1, 1, 1].mapIndexed((e, i) => e + i)).toEqual([1, 2, 3])
})

it('max', () => {
    expect([3, 5, 2].max()).toEqual(5)
    expect(['a', 'd', 'b'].max()).toEqual('d')
    expect([].max()).toBeUndefined()
})

it('maxOf', () => {
    expect([{ value: 3 }, { value: 5 }, { value: 2 }].maxOf(e => e.value)).toEqual(5)
    expect([{ value: 'a' }, { value: 'd' }, { value: 'b' }].maxOf(e => e.value)).toEqual('d')
    // @ts-ignore
    expect([].maxOf(e => e.value)).toBeUndefined()
})

it('min', () => {
    expect([3, 5, 2].min()).toEqual(2)
    expect(['a', 'd', 'b'].min()).toEqual('a')
    expect([].min()).toBeUndefined()
})

it('minOf', () => {
    expect([{ value: 3 }, { value: 5 }, { value: 2 }].minOf(e => e.value)).toEqual(2)
    expect([{ value: 'a' }, { value: 'd' }, { value: 'b' }].minOf(e => e.value)).toEqual('a')
    // @ts-ignore
    expect([].minOf(e => e.value)).toBeUndefined()
})
