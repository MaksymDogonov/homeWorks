import {includes, indexOf, lastIndexOf, some} from '../scripts/index.js'


test('indexOf', () =>{
    expect(indexOf([],1)).toEqual(-1);
    expect(indexOf([1,2,3,2],2)).toEqual(1);
    expect(indexOf(['a','b','c'],'a')).toBe(0);

});
test('lastIndexOf', () =>{
    expect(lastIndexOf([],1)).toEqual(-1);
    expect(lastIndexOf([1,2,3,2],2)).toEqual(3);
    expect(lastIndexOf(['a','b','c'],'b')).toBe(1);
});
test('includes', () =>{
    expect(includes([],1)).toBeFalsy();
    expect(includes([1,2,3,2],2)).toBeTruthy();
    expect(includes(['a','b','c'],'b')).toBeTruthy();
});
test('some', () =>{
    expect(some([],x => x  === 0)).toEqual(false);
    expect(some([1,2,3,2],x => x  === 1)).toBeTruthy();
    expect(some(['a','b','c'],x => x  === 'b')).toBeTruthy();
});