/*
Found a workaround instead of using this. Keeping in case needed later.
One big issue with this: cannot use 'window' in Gatsby SSR

*/

// const support = (function () {

//   const parser = new DOMParser()
//   try {
//     parser.parseFromString('x', 'text/html')
//   } catch (err) {
//     return false
//   }
//   return true
// })()

// export const textToHTML = function (str) {
//   // check for DOMParser support
//   if (support) {
//     const parser = new DOMParser()
//     const doc = parser.parseFromString(str, 'text/html')
//     return doc.body.innerHTML
//   } else {
//     return ''
//   }

//   // Otherwise, create div and append HTML
//   // const dom = document.createElement('div');
//   // dom.innerHTML = str;
//   // return dom;
// }
