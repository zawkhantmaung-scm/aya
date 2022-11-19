const reverseParentheses = (s) => {
  if (!s) return '';

  const a = [];

  s.split('').map((i) => {
    if (i == ')') {
      let c = '';
      while (a[a.length - 1] != '(') {
        c += a.pop().split('').reverse().join('');
      }
      a.pop();
      a.push(c);
    } else {
      a.push(i);
    }
  });

  console.log(a.join(''));
};

let s;

s = 'foo(bar)';
reverseParentheses(s);

s = '(bar)';
reverseParentheses(s);

s = 'foo(bar)blim';
reverseParentheses(s);

s = 'foo(foo(bar))blim';
reverseParentheses(s);
