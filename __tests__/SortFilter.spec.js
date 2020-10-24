import React from 'react';
import { SortFilter } from '../src/index';
import Core from '../src/SortFilter/Core';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { unmountComponentAtNode } from "react-dom";
// import renderer from 'react-test-renderer';
import taxonomies from './data/taxonomiesObject.json';
import records from './data/basicRecords.json';

configure({ adapter: new Adapter() });

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Instantiate SortFilter component via shallow', () => {
  const defaultSort = 'Cat';// empty string defaults to show all
  const itemSelector = 'sortblock';
  const wrapper = shallow(<SortFilter defaultSort={defaultSort} taxonomies={taxonomies} itemSelector={itemSelector}><Elements records={records} itemSelector={itemSelector} /></SortFilter>);
  expect(wrapper).toMatchSnapshot();
});

test('Instantiate SortFilter component via mount', () => {
  const defaultSort = 'Cat';// empty string defaults to show all
  const itemSelector = 'sortblock';
  const wrapper = mount(<SortFilter defaultSort={defaultSort} taxonomies={taxonomies} itemSelector={itemSelector}><Elements records={records} itemSelector={itemSelector} /></SortFilter>);
  const ulElement = wrapper.find(`[classtosort="${itemSelector}"]`);

  // console.log('ss', wrapper.find(`[classtosort="${itemSelector}"]`))
  // console.log('ss', wrapper.find(Core).first().props().defaultSort)
  // console.log('ss', wrapper.find(Core).first().props().defaultSort)
  // console.log('ss', ulElement.instance())
  // console.log('ss>>>', wrapper.find(Core).instance().element.current)
  expect(wrapper.getDOMNode()).not.toBeNull();
  expect(ulElement.instance()).not.toBeNull();
  expect(ulElement.instance()).toBe(wrapper.find(Core).instance().element.current);
  expect(wrapper.getDOMNode()).toMatchSnapshot();
  expect(wrapper.find(Core).instance().element.current).toMatchSnapshot();
})

function Elements({ itemSelector }) {
  return records.map((record) => <Element key={record.id} record={record} itemSelector={itemSelector} />);
}

function Element(props) {
  const { itemSelector, record } = props;
  return (
    <div className={`col-md-6 ${itemSelector}`} data-groups={`${JSON.stringify(record.dataGroupArrayString)}`}>
      <div className="aspect aspect--4x3">
        <div className="aspect__inner">
          <img className="element__img" src={record.src} alt="" />
        </div>
      </div>
    </div>
  );
}