import {number, transformer} from "../src/romanizer";


describe('romanizer',() =>{
          it('should return X',()=>{
                    const formatted = transformer(10)
                    expect(formatted).toEqual("X");
          })
}

);