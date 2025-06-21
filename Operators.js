

// && and operator is used as Guard Operator
const msg=1 && 'true'; // msg will be 'true' as 1 is truthy value
console.log('msg: ' + msg);
const msg2=0 && 'true'; // msg2 will be 0 as 0 is falsy value
console.log('msg2: ' + msg2);

// || OR operator is used as a default operator
const msg3=1 || 'checked';//msg3 will be 1 as 1 is truthy value and it will not check the right operand
console.log('msg3: ' + msg3);
const msg4='' || 'checked';//msg4 will be 'checked' as '' is falsy value and it will check the right operand
console.log('msg4: ' + msg4); 

const age=11;
const isholiday=false;
const holiday= !isholiday;
const discount= holiday && (age<12 || age>65);
console.log(discount);