import {transform} from "../src/romanizer";


describe('romanizer',() =>{
          it('should return X',()=>{
                    const formatted = transform(10);
                    expect(formatted).toEqual("X");
          })
}

);