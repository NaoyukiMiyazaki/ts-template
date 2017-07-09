import Sample from '../../src/index.ts';

describe('sample', () => {
  beforeEach(() => {
    document.body.innerHTML = __html__['test/unit/sample.html'];
  });

  it('sample test1', () => {
    let h1 = document.querySelector('h1');
    assert(h1.innerText === 'hello');
  });

  it('sample test2', () => {
    let h1 = document.querySelector('h1');
    let sample = new Sample();
    h1.innerText = sample.getVersion();
    assert(h1.innerText === '1');
  });

  it('sample test3', () => {
    assert(1 === '1');
  });
});