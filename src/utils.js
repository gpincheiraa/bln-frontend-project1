export const numberFormatter = number => {
  const numberSplitted = parseFloat(number.toString()).toFixed(2).split('.');
  const replaceChunksRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  
  return numberSplitted[0]
    .replace(replaceChunksRegex, '$&.') + (numberSplitted[1] ? `,${numberSplitted[1]}` : '');
};