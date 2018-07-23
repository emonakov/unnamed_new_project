// setup file
import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme to work with adapter
configure({ adapter: new Adapter() });
