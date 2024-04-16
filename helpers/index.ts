export const truncateString = (inputString: string, maxLength: number) => {
  if (inputString.length <= maxLength) {
    return inputString;
  } else {
    return inputString.slice(0, maxLength - 3) + "...";
  }
};

export const hasMorePages = (data: {
  page: number;
  amount: number;
  total: number;
}) => {
    if (data.total%data.amount === 0) {
        return data.total/data.amount < data.total
    } else {
        return data.total/data.amount + 1 < data.total
    }
    
};
