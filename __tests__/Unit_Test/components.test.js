import {create} from 'react-test-renderer';
import Header from '../../src/components/Header';
import ItemCard from '../../src/components/ItemCard';
import ItemSubCard from '../../src/components/ItemSubCard';


const treeHeader = create(<Header />);
const treeItemCard = create(<ItemCard />);
const treeItemSubCard = create(<ItemSubCard />);


test('Snapshot: Component > Header', () => {
    expect(treeHeader).toMatchSnapshot()
})

test('Snapshot: Component > ItemCard', () => {
    expect(treeItemCard).toMatchSnapshot()
})

test('Snapshot: Component > ItemSubCard', () => {
    expect(treeItemSubCard).toMatchSnapshot()
})