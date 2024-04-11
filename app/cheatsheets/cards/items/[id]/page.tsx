import Item from '@/components/CheatSheet/Item';
import items from '@/mockup-data/items';

export default function CheatSheetDetail({ params }: { params: { id: string } }) {
  const itemId = params.id;
  const currentItem = items.find((item) => item.itemId === itemId);

  if (!currentItem) {
    return <div>Card not found</div>;
  }

  return (
    <div className='container mx-auto p-4'>
      <Item itemData={currentItem} />
    </div>
  );
}
