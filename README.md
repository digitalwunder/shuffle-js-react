# ShuffleJS-React

[![Build Status](https://travis-ci.org/ar-to/shufflejs-react.svg?branch=master)](https://travis-ci.org/ar-to/shufflejs-react)
[![dependencies Status](https://david-dm.org/ar-to/shufflejs-react/status.svg)](https://david-dm.org/ar-to/shufflejs-react) [![devDependencies Status](https://david-dm.org/ar-to/shufflejs-react/dev-status.svg)](https://david-dm.org/ar-to/shufflejs-react?type=dev) 
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![node][node-url]
![GitHub package.json version][version-url]
![npm (prod) dependency version][react-url]
![npm (prod) dependency version][shufflejs-url]
![GitHub issues][issues-url]
![Website][website-url]
![GitHub last commit (branch)][master-commit-url]


# Getting Started ✨

In progress...but check [codesandbox](https://codesandbox.io/embed/react-testing-6m589?fontsize=14&hidenavigation=1&theme=dark) or [website](https://ar-to.github.io/shufflejs-react/) for demo.


```jsx
import { SortFilter } from "shufflejs-react";
import taxonomies from "./data/taxonomiesObject.json";
import records from "./data/basicRecords.json";

export default function App() {
  const defaultSort = ""; // empty string defaults to show all
  const itemSelector = "sortblock";
  return (
    <div className="App">
      <SortFilter
        defaultSort={defaultSort}
        taxonomies={taxonomies}
        itemSelector={itemSelector}
      >
        <Elements records={records} itemSelector={itemSelector} />
      </SortFilter>
    </div>
  );
}
```
Child elements can be anything that takes in array of records objects
```jsx
function Elements({ itemSelector }) {
  return records.map(record => (
    <Element key={record.id} record={record} itemSelector={itemSelector} />
  ));
}

function Element(props) {
  const { itemSelector, record } = props;
  return (
    <div
      className={`col-md-6 ${itemSelector}`}
      data-groups={`${JSON.stringify(record.dataGroupArrayString)}`}
    >
      <div className="aspect aspect--4x3">
        <div className="aspect__inner">
          <img className="element__img" src={record.src} alt="" />
        </div>
      </div>
    </div>
  );
}
```
Files for data
```json
// basicRecords.json
[
  {
    "id": 1,
    "src": "https://images.unsplash.com/photo-1484244233201-29892afe6a2c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&s=14d236624576109b51e85bd5d7ebfbfc",
    "dataGroupArrayString": ["Cat","Cat Procedures","Cat Lift"]
  },
  {
    "id": 2,
    "src": "https://images.unsplash.com/photo-1465414829459-d228b58caf6e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=600&fit=crop&s=7a7080fc0699869b1921cb1e7047c5b3",
    "dataGroupArrayString": ["City"]
  }
]
// taxonomiesObject.json
{
  "Body Types": {
    "people": {
      "slug": "people"
    },
    "food": {
      "slug": "food"
    },
    "cat": {
      "slug": "cat"
    },
    "city": {
      "slug": "city"
    },
    "nature": {
      "slug": "nature"
    },
    "abstract": {
      "slug": "abstract"
    }
  }
}

```

# Contributing

Read the [Contributing.md](https://github.com/ar-to/shufflejs-react/blob/master/.github/CONTRIBUTING.md) file for instructions on running locally and contributing.

# License

MIT © Aricode00

[node-url]: https://img.shields.io/node/v/shufflejs-react
[version-url]: https://img.shields.io/github/package-json/v/ar-to/shufflejs-react
[react-url]: https://img.shields.io/npm/dependency-version/shufflejs-react/react
[shufflejs-url]: https://img.shields.io/npm/dependency-version/shufflejs-react/shufflejs
[issues-url]: https://img.shields.io/github/issues/ar-to/shufflejs-react
[website-url]: https://img.shields.io/website?url=https%3A%2F%2Far-to.github.io%2Fshufflejs-react%2F
[master-commit-url]:  https://img.shields.io/github/last-commit/ar-to/shufflejs-react/master?label=last%20commit%3Amaster