'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".ycs {\n  text-shadow: -3px 0 1px cyan, 3px 0 1px red;\n}";
styleInject(css_248z);

const Support = ({ label }) => {
    const [clicked, setClicked] = React.useState(false);
    const onClicked = React.useCallback(() => setClicked(!clicked), [clicked]);
    console.log(css_248z);
    return (React.createElement("div", { className: css_248z.ycs, onClick: onClicked },
        label,
        " ",
        clicked ? 1 : 2));
};

exports.Support = Support;
