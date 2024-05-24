assert = chai.assert;

describe('Testing function randint()', function(){
    var result = randint();

    it('Test 1: randint() returns a number', function(){
        assert.exists(result,'The return value is not undefined or null');
    });

    it('Test 2: the returned value is from type number', function(){
        assert.typeOf(result,'number');
    });

    it('Test 3: the  returned values are from 1 to 100',function(){
        for(var i = 1; i < 1000; i++){
            result = randint();
            assert(result >= 1 && result <= 100);
        }
    });
})

// describe('Testing the function submit()', function(){

//     var submit = submit();

//    it('Test 1: submit() stores the input user gives into array', function(){
//     assert.exists(submit,'The value is not passing into the array   ');
// });



// })