import ErrorRepository from "../app";

const errorRep = new ErrorRepository();

errorRep.errors.set('404', 'Not Found');
errorRep.errors.set('502', 'Bad Gateway');


test('Известные ошибки', () => {
  expect(errorRep.translate('404')).toBe('Not Found')
  expect(errorRep.translate('502')).toBe('Bad Gateway')
})

test('Неизвестные ошибки', () => {
  expect(errorRep.translate('403')).toBe('Unknown code')
})
