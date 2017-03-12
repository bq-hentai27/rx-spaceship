/*!
 * todo scripts
 * bq-hentai | 03/12/2017
 */

{
  const win = window;
  // fix canvas width & height
  const $app = document.querySelector('#app');
  $app.style.width = `${win.innerWidth}px`;
  $app.style.height = `${win.innerHeight}px`;

  const { Observable } = Rx;

  const log = (..._) => console.log(..._);
  const logError = error => console.error(error);

}
