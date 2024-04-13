import Item from '@/components/CheatSheet/Item';
import items from '@/mockup-data/items';

export default function ItemDetail({ params }: { params: { id: string } }) {
  const itemId = params.id;
  const currentItem = items.find((item) => item.itemId === itemId);

  if (!currentItem) {
    return <div>Card not found</div>;
  }

  return (
    <div className='container mx-auto mt-8' data-card-id={itemId}>
      <Item itemData={currentItem} />
    </div>
  );
}
