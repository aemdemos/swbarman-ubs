export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`ai-columns-ubs-${cols.length}-cols`);

  // setup image ai-columns-ubs
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('ai-columns-ubs-img-col');
        }
      }
    });
  });
}
