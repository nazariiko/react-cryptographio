export const formatPrice = (price: string | undefined) => {
  let count = 0;
  let [int, float] = (price as string).split('.');
  let arr = int.split('').reverse();

  for (let i = 1; i < arr.length; i++) {
    if (i % 3 === 0 && i >= 3) {
      arr.splice(i + count, 0, ',');
      count++;
    }
  }

  while (arr[arr.length - 1] === ',') {
    arr.pop();
  }

  return `$${arr.reverse().join('')}.${float}`;
};

export const formatMarketCap = (marketCap: string | undefined) => {
  let count = 0;
  let arr = (marketCap as string).toString().split('').reverse();
  for (let i = 1; i < arr.length; i++) {
    if (i % 3 === 0 && i >= 3) {
      arr.splice(i + count, 0, ',');
      count++;
    }
  }

  while (arr[arr.length - 1] === ',') {
    arr.pop();
  }

  return `$${arr.reverse().join('')}`;
};

export const formatVolumeInUsd24H = (volumeInUsd24H: string | undefined) => {
  let count = 0;
  let [int] = (volumeInUsd24H as string).split('.');
  let arr = int.split('').reverse();

  for (let i = 1; i < arr.length; i++) {
    if (i % 3 === 0 && i >= 3) {
      arr.splice(i + count, 0, ',');
      count++;
    }
  }

  while (arr[arr.length - 1] === ',') {
    arr.pop();
  }

  return `$${arr.reverse().join('')}`;
};

export const formatChange = (change: string) => {
  let percent: string;
  if ((change as string)[0] === '-') {
    percent = (Number(change.slice(1)) * 100).toFixed(2) + '%';
    return [percent, 'red'];
  } else {
    percent = (Number(change) * 100).toFixed(2) + '%';
    return [percent, 'green'];
  }
};
