'use strict';
import React from 'react';
import icon from './icon.png';
import google from 'google';

google.resultsPerPage = 5;

const stackoverflowPlugin = ({term, display, actions}) => {
  let preview;

  google(`${term} site:stackoverflow.com`, function (err, res) {
    if (err) {
      return;
    }

    const results = res.links.map((link, index) => ({
      id: index,
      icon,
      title: link.title,
      subtitle: link.href,
      clipboard: link.href,
    }));

    display(results);
  });
};

module.exports = {
  fn: stackoverflowPlugin,
  name: 'Search on stackoverflow.com',
  icon,
}
