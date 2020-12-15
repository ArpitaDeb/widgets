import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'React',
    content: 'React is a frontend javascript framework'
  },
  {
    title: 'learn React',
    content: 'React is a javascript framework'
  },
  {
    title: 'best JS React',
    content: 'React is a framework Engineer uses'
  }
];
const options = [
  {
    label: 'Red',
    value: 'deep red'
  },
  {
    label: 'Blue shade',
    value: 'pale blue'
  },
  {
    label: 'Pink shade',
    value: 'green'
  }
];

const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown
      options={options} />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />;
  }
};

const showComponent = (route, component) => {
  return window.location.pathname === route
    ? component : null;
};

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      {/* 
      { showAccordion()}
      { showList()}
      { showDropdown()}
      { showTranslate()}
      <Accordion items= {items} /> 
      <Search />
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      { showDropdown ?
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> : null
      }
      */}
    </div>
  );
};