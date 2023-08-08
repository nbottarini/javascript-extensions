import '../src/StringExtensions'

it('padZeros prefix with zeros until fill given length', () => {
    expect(''.padZeros(0)).toEqual('')
    expect(''.padZeros(2)).toEqual('00')
    expect('a'.padZeros(0)).toEqual('a')
    expect('a'.padZeros(1)).toEqual('a')
    expect('a'.padZeros(2)).toEqual('0a')
    expect('a'.padZeros(3)).toEqual('00a')
})

it('removePrefix removes string prefix if exists', () => {
    expect(''.removePrefix('h')).toEqual('')
    expect('hello'.removePrefix('h')).toEqual('ello')
    expect('hello'.removePrefix('he')).toEqual('llo')
})

it('countOccurrences', () => {
    expect('hello'.countOccurrences('h')).toEqual(1)
    expect('hello'.countOccurrences('he')).toEqual(1)
    expect('hello'.countOccurrences('l')).toEqual(2)
    expect('hello'.countOccurrences('w')).toEqual(0)
    expect('dada'.countOccurrences('da')).toEqual(2)
    expect('foofoofoo'.countOccurrences('foo')).toEqual(3)
    expect('foofoofoo'.countOccurrences('foofoo')).toEqual(1)
})
